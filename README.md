<!-- PROJECT HEADER -->
<br />
<div align="center">
    <h3 align="center">Leya Print</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li>
    <a href="#usage">Usage </a>
     <ul>
        <li><a href="#examples">Examples</a></li>
      </ul>
    </li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#end-to-end-tests">End-to-End Tests</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

Leya Print is a powerful and user-friendly tool for generating PDFs from customizable templates. Leya Print is designed to make it easy for developers to create professional-looking PDF documents for a variety of purposes.

One of the key components of Leya Print is the Designer, which provides a visual interface for inserting content in the PDF templates. With Designer, users can easily upload custom templates that meet their specific needs, whether they're creating invoices, reports, or other types of documents.

Leya Print is a versatile and powerful tool that simplifies the process of generating PDFs from templates. Whether you're a developer or a non-technical user, Leya Print is a valuable resource for creating professional-looking documents quickly and easily.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps:

1. Clone the repo
2. After cloning the repo, open a terminal for each main project: 

server/tpl-service
server/pdf-service
web/designer
web/print
web/templates

First command to type is "npm install" to get all necessary dependencies.
Second command is to startup the projects, choose which project you want to run:

server/tpl-service: 
```
npm run dev
```
server/pdf-service:
```
npm run dev
```
web/designer:
```
npm start
```
web/print:
```
npm start
```
web/templates:
```
npm start
```

If you are using gitpod with the solutions running you can use the PORTS tab to open the projects in the browser.
If you are using VS Code locally you have to open the links manually. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

To use the tool, open the designer project url (You can find the designer link in the PORTS tab of the IDK if you are using Gitpod, VS Code), the UI has three functionalities for users.

deployed templates: custom template modified by users and deployed for reusability.

live templates: a collection of default available template for use, such as invoices, work reports, cost tables.

upload template: drag and drop a tgz file with a new template after re-build the rest app the template will appear in the UI as a deployed template.

Clicking on a template name the user can see the template and on the right the json code to modify the fields.
After modifing the fields to the user's liking there is a preview button to generate the PDF file and if needed it can be saved from there.

Please check our [INSTRUCTIONS](/INSTRUCTIONS.md) file for instructions.

### Examples

From the designer UI go to a user might click on the "invoice" template from the "live template" category.
From the upper-right box the json data will be modified to the user's liking.
When done the preview button will be clicked and the pdf is generated.

More examples coming soon.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Project Structure -->
## Project Structure

This is the main project structure:

- [server](./server) backend
    - [container](./server/container/) data for deployment container
    - [tpl-service](./server/tpl-service/) REST API service for pdf templates
    - [pdf-service](./server/pdf-service/) REST API service for printing pdf using playwright

- [web](./web) frontends
    - [designer](./web/designer) solution to upload/edit and preview printing templates
    - [print](./web/print) solution for printing pdfs
    - [templates](./web/templates) solution that holds samples for templates

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- END TO END TESTS -->
## End-to-end-tests

To ensure that the application's golden path is working correctly from a user's perspective we introduced end-to-end tests.
In theory, end-to-end testing (E2E testing) is the process of testing a piece of software from start to finish as it will be used by the actual users.
 
The specs (tests) can be found under the e2e/tests folder.
There is a config file in the e2e folder to config which browser should be used for testing.

**Test Locally:**

To run the tests on a local copy of Leya, the property baseURL from the playwright.config.ts file has to be changed a valid URL (local UI service URL, deployed online version of UI).
Execute the command:

e2e/:
```
npm test
```
The command will execute the command playwright test --headed which will run the tests in an active browser.
The tests might fail at first because there are no other snapshots to compare to, running the tests again should make them pass.

**Test on Gitpod:**

Running the tests on Gitpod is a little different since they cannot run with --headed one test will always fail because without the option active a snapshot cannot be taken of a newly opened tab.

Execute the command:

e2e/:
```
npx playwright test
```

**Snapshosts:**

In the e2e folder there is a snapshots folder with the /user and /ci sub-directories that will hold snapshots of the tests done.
The user is for current user's instance tests and in ci are the ones from the pipeline.

**Docker/Scripts:**

For testing flexibility in ci-cd pipelines the tests are also present in a docker container, the container can be started and the tests can be ran locally as well.
The run-in-docker.sh script runs the tests in docker and shell-in-docker opens a bash terminal for any additional needs in the container.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please check our [CONTRIBUTE](/CONTRIBUTE.md) file for instructions on how to contribute.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the Apache License Version 2.0, License. See [LICENSE](/LICENSE.md) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>