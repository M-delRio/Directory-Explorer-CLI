# CLI

## Overview

This application can be used to retrieve information about the content of a folder on the application server. The target folder will be referred to as the *source folder*. 

## Getting Started

### Install the app dependencies
From the root directory of the app:

``` console
npm install
```

### Application entry point
The defaul base command for this app is set to *folder_view*. If you wish to specify a different command name first modify line 12 of the *package.json* file

Create a global link to the app by entering the following in the root directory of the app:

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