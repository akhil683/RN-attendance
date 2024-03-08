const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const Config = getDefaultConfig(__dirname)
Config.resolver.assetExts.push("cjs")

module.exports = Config;
