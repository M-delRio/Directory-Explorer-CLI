#!/usr/bin/env node

const pckg = require('./../package.json')
const program = require('commander')
const { getFolderData } = require("../lib/commands.js")

// program.version(pckg.version)
// program.parse(process.argv)

program
  .version('1.0.0')
  .description('Folder Viewer Application')

program
  .command("get <sourceFolder>")
  .alias('g')
  .description('get the content of the target source folder')
  .action(sourceFolder => getFolderData(sourceFolder));

program.parse(process.argv)