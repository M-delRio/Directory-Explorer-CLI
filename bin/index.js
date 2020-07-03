#!/usr/bin/env node

const program = require('commander')
const { getFolderData } = require("../lib/commands.js")

program
  .version('1.0.0')
  .description('Folder Viewer Application')

program
  .command("get <sourceFolder>")
  .alias('g')
  .description('get the content of the target source folder')
  .action(sourceFolder => getFolderData(sourceFolder));

program.parse(process.argv)