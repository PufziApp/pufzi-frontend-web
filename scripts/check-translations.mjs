import fs from 'node:fs'
import path from 'node:path'

const TRANSLATIONS_DIRECTORY = path.resolve('public/locales')

const SOURCE_LANGUAGE = 'en'

// --------------------------------------------------
// Helpers
// --------------------------------------------------

const getDirectories = (directory) => {
  if (!fs.existsSync(directory)) {
    return []
  }

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b))
}

const getJsonFiles = (directory) => {
  if (!fs.existsSync(directory)) {
    return []
  }

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b))
}

const readJsonFile = (filePath) => {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch (error) {
    console.error(`❌ Invalid JSON: ${filePath}`)
    console.error(error.message)
    process.exit(1)
  }
}

const sortObjectAlphabetically = (value) => {
  if (Array.isArray(value)) {
    return value.map(sortObjectAlphabetically)
  }

  if (value === null || typeof value !== 'object') {
    return value
  }

  return Object.keys(value)
    .sort((a, b) => a.localeCompare(b))
    .reduce((sortedObject, key) => {
      sortedObject[key] = sortObjectAlphabetically(value[key])

      return sortedObject
    }, {})
}

const mergeMissingKeys = (source, target, namespace, language, parentPath = '') => {
  let modified = false

  for (const key of Object.keys(source)) {
    const fullKey = parentPath ? `${parentPath}.${key}` : key

    if (!Object.prototype.hasOwnProperty.call(target, key)) {
      // Dacă valoarea din source este obiect, creăm și structura.
      if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        target[key] = {}
      } else {
        target[key] = ''
      }

      console.log(`➕ [${language}/${namespace}] Missing key "${fullKey}" -> created`)

      modified = true
    }

    if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (target[key] === null || typeof target[key] !== 'object' || Array.isArray(target[key])) {
        target[key] = {}

        modified = true
      }

      if (mergeMissingKeys(source[key], target[key], namespace, language, fullKey)) {
        modified = true
      }
    }
  }

  return modified
}

const writeJsonFile = (filePath, content) => {
  const sortedContent = sortObjectAlphabetically(content)

  fs.writeFileSync(filePath, `${JSON.stringify(sortedContent, null, 2)}\n`, 'utf8')
}

// --------------------------------------------------
// Validation
// --------------------------------------------------

if (!fs.existsSync(TRANSLATIONS_DIRECTORY)) {
  console.error('❌ Translation directory does not exist:')
  console.error(TRANSLATIONS_DIRECTORY)
  process.exit(1)
}

const languages = getDirectories(TRANSLATIONS_DIRECTORY)

if (languages.length === 0) {
  console.error('❌ No language folders found in public/locales.')
  process.exit(1)
}

if (!languages.includes(SOURCE_LANGUAGE)) {
  console.error(`❌ Source language "${SOURCE_LANGUAGE}" does not exist in public/locales.`)
  process.exit(1)
}

console.log('')
console.log(`🌍 Languages: ${languages.join(', ')}`)
console.log(`📘 Source language: ${SOURCE_LANGUAGE}`)
console.log('')

// --------------------------------------------------
// Find every namespace
// --------------------------------------------------

const allNamespaces = new Set()

for (const language of languages) {
  const languageDirectory = path.join(TRANSLATIONS_DIRECTORY, language)

  const files = getJsonFiles(languageDirectory)

  for (const file of files) {
    allNamespaces.add(file)
  }
}

const namespaces = [...allNamespaces].sort((a, b) => a.localeCompare(b))

let filesWereModified = false

// --------------------------------------------------
// Ensure every namespace exists in every language
// --------------------------------------------------

for (const namespace of namespaces) {
  const sourceFilePath = path.join(TRANSLATIONS_DIRECTORY, SOURCE_LANGUAGE, namespace)

  if (!fs.existsSync(sourceFilePath)) {
    console.warn(
      `⚠️ Namespace "${namespace}" does not exist in source language "${SOURCE_LANGUAGE}".`
    )

    continue
  }

  const sourceTranslations = readJsonFile(sourceFilePath)

  for (const language of languages) {
    const languageDirectory = path.join(TRANSLATIONS_DIRECTORY, language)

    const targetFilePath = path.join(languageDirectory, namespace)

    // ----------------------------------------------
    // Missing namespace file
    // ----------------------------------------------

    if (!fs.existsSync(targetFilePath)) {
      console.log(`📄 Missing ${language}/${namespace} -> creating file`)

      const emptyTranslations = {}

      mergeMissingKeys(sourceTranslations, emptyTranslations, namespace, language)

      writeJsonFile(targetFilePath, emptyTranslations)

      filesWereModified = true

      continue
    }

    // ----------------------------------------------
    // Existing namespace
    // ----------------------------------------------

    const targetTranslations = readJsonFile(targetFilePath)

    let fileWasModified = false

    if (mergeMissingKeys(sourceTranslations, targetTranslations, namespace, language)) {
      fileWasModified = true
    }

    // ----------------------------------------------
    // Alphabetical sorting
    // ----------------------------------------------

    const sortedTranslations = sortObjectAlphabetically(targetTranslations)

    const currentContent = `${JSON.stringify(targetTranslations, null, 2)}\n`

    const sortedContent = `${JSON.stringify(sortedTranslations, null, 2)}\n`

    if (currentContent !== sortedContent) {
      console.log(`🔤 Sorting ${language}/${namespace} alphabetically`)

      fileWasModified = true
    }

    if (fileWasModified) {
      writeJsonFile(targetFilePath, targetTranslations)

      filesWereModified = true
    }
  }
}

// --------------------------------------------------
// Also sort source language files
// --------------------------------------------------

for (const namespace of getJsonFiles(path.join(TRANSLATIONS_DIRECTORY, SOURCE_LANGUAGE))) {
  const filePath = path.join(TRANSLATIONS_DIRECTORY, SOURCE_LANGUAGE, namespace)

  const translations = readJsonFile(filePath)

  const sortedTranslations = sortObjectAlphabetically(translations)

  const currentContent = `${JSON.stringify(translations, null, 2)}\n`

  const sortedContent = `${JSON.stringify(sortedTranslations, null, 2)}\n`

  if (currentContent !== sortedContent) {
    console.log(`🔤 Sorting ${SOURCE_LANGUAGE}/${namespace} alphabetically`)

    writeJsonFile(filePath, sortedTranslations)

    filesWereModified = true
  }
}

// --------------------------------------------------
// Result
// --------------------------------------------------

console.log('')

if (filesWereModified) {
  console.log('⚠️ Translation files were automatically updated.')
  console.log('')
  console.log('Review the empty translations and add the correct values.')
  console.log('')
  console.log('Then run:')
  console.log('')
  console.log('  git add public/locales')
  console.log('  git commit -m "your message"')
  console.log('')
  console.log('To skip translation checks:')
  console.log('')
  console.log('  git commit -m "your message" --no-verify')
  console.log('')

  process.exit(1)
}

console.log('✅ Translation namespaces and keys are synchronized.')
console.log('✅ Translation keys are alphabetically sorted.')
