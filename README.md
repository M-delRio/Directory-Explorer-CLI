# CLI

## Overview

This application can be used to retrieve information about the content of a folder on the application server. The target folder will be referred to as the *source folder*. 

## Getting Started

### Download the App
``` console
git clone https://github.com/M-delRio/Directory-Explorer-CLI.git
```

### Install app dependencies
From the root directory of the app (`folder_view_cli`):

``` console
npm install
```

### Application entry point
The default base command for this app is set to *folder_view*. If you wish to specify a different command name first modify line 12 of the *package.json* file

Create a global link to the app by entering the following from the root directory of the app:

``` console
npm link
```

## Commands

### get (alias: g)
``` console
get <path>
```

**sourceFolder**: a path relative to the server's home directory 

This path will be joined to the home directory. Valid paths include the home directory itself and any descendant folders of the home directory. Parent folders of the server's home directory are not accessible. 

This command outputs a JSON file as detailed in the API documentation. 

