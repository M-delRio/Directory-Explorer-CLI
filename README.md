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

**path**: a path relative to the server's home directory 

This path will be joined to the server's home directory. Valid paths include the home directory  itself (by submitting an empty string or `./`) and any descendant folders of the home directory. Parent folders of the server's home directory are not accessible (requests with `..` used in any part of the path to move up a directory will be rejected). 

This command outputs a JSON file as detailed below.

## Response - Success
```json
{
    "message": "Folder content successfully retrieved",
    "data": {
        "sourceFolder": "images/company_retreat",
        "files": [{fileObject1}, {fileObject2}, {fileObject3}],
        "subFolders": ["2020", "2019", "2018"],
        "fileCount": 45,
        "totalFileSize": 500000000
    }
}
```

##### Attributes
- **message**(string): indication of whether the request succeeded or not


**data**: this object will only be present in the case of a successful request
- **sourceFolder**(string): the submitted source folder path
- **files**(array): object representation of files (see file object description below) within the source folder sorted by file size 
- **subFolders**(array): the child subfolders of the source folder
- **fileCount**(array): number of files within the source folder
- **totalFileSize**(array): total size in bytes of the files within the source folder

#### File Objects
```json
{
  "name": "group_shot.jpg",
  "size": 5000000,
  "dateLastModified": "Fri Jan 17 2020 16:36:08 GMT-0500 (Eastern Standard Time)"
}
```

##### Attributes
- **name**(string): file name
- **size**(integer): file size in bytes
- **lastModifiedDate**(string): date and time when a file was last modified

## Response - Error Handling

In the case of a failed request a JSON object will be returned with a single *message* attribute. 

### Example Response - Request for a non existant source folder

```json
{
  "message": "Folder not found!"  
}
```



