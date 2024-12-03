# Taktics Test Monorepo
This monorepo has 2 projects:

* A front-end made in angular 1.5.8. Docs [link](https://docs.angularjs.org/guide)
* A back-end made in loopback 3. Docs [link](https://loopback.io/doc/en/lb3/)
  
  * The back-end has one user added to make login, jplaza@taktics.net / 1212
  * The backend uses an in-memory connector to persist data. A database is not needed to pass the test

For better compatibility use Node 14.X and Linux or if in Windows use WSL2. If you are using Windows you could have issues with node-sass. I wouldn't recommend developing in Windows but if you want to do it, these links can help you in case of trouble starting the project:

- https://stackoverflow.com/questions/46953808/node-sass-installation-issue-on-windows-10
- https://github.com/nodejs/node-gyp/blob/main/docs/Updating-npm-bundled-node-gyp.md

# Project structure
The following [video](https://www.loom.com/share/9759af64893f410197a8805d9fe8bf79) makes a brief explanation about how the project is structured and the key elements.

# Test Requirements
The solution will start with this project and must be done with the frameworks used, angular js and loopback.

The project needs a way to handle budgets made by the users to send to the client.

A Budget has the following structure:

![Budget Structure](budget_structure.png)

With the following fields
* A name, type string
* A thumbnail, an image url so type string
* A date, type date
* A client name, type string
* A total cost import (will be the sum of all chapters total cost)
* A total sale import (will be the sum of all chapters total sale)
* A list of Chapters, an array of chapters

A Chapter has the following fields:

* A rank that determines the chapter position in the budget, type number
* A description, type string
* 2 sale coefficients (material and labour). A sale coefficient its a margin gained to the cost, for example a sale coefficient of 1.5 on 300€ cost will produce a 450€ sale
* A total cost import (will be the sum of all batches total cost)
* A total sale import (will be the sum of all batches total sale)
* A list of Batches, an array of batches

A Batch has the following fields:

* A rank that determines the batch position inside the chapter
* A description, type string
* An amount, type number
* A material cost import
* A labour cost import
* A unitary cost import that will be the sum of material and labour cost
* A total cost import that will be unitary cost times amount
* An unitary sale cost that will be the sum of material and labour cost with the corresponding sale coefficients
* A total sale import that will be the unitary sale times amount

So a new section "Budgets" on the sidebar must be created. This section will lead to a new view that will render an upper part with 3 filters: by name, by client name and by a range of dates; and on the bottom part a list with all the budgets (will show all the fields as columns, the thumbnail must be a column too) filtered by the filters.

Every budget will have 2 actions: edit budget and delete budget.

When editing the budget, will open a detail of the budget. This budget detail view has 2 sections:

* An upper on that will display the budget fields as a nice form (needs to be editable, only the ones that aren't a calculus result)
  * There must be a way to see the thumbnail and be able to delete it or upload a new one
* A bottom one that will display a table with the chapters and batches of the budgets. The fields that aren't formulas will be editable and will update all the fields that are calculations (batch -> chapter -> budget). It needs to have a visual indicator that differentiates what's a chapter and what's a batch. Finally, this table will have the following actions:

  * Create a chapter, will add a chapter
  * Delete a chapter, will delete a chapter and its child batches
  * Create a batch inside a chapter
  * Delete a batch inside a chapter

When deleting the budget, will show a modal warning the user that the budget will be deleted. If the user selects "Accept", the budget will be deleted. If the user selects "Cancel", the modal will be closed.

Finally the las action of the budgets table will be a create one that will open the same view as the edit budget but to create a new one.

# Mockups
Budget list

![Budget list](budget_list.png)

Budget detail screen

![Budget detail](./budget_detail.png)

# Test Duration
After you received the email with the instructions you will the mentioned on the email amount of time to deliver this test. You must deliver the solution before the time expires in order to be able to pass the test.

# Delivering Instructions
In order to deliver this test you will create a private repo on your provider of choice (Github, GitLab, ...), include jplaza@taktics.net as a user capable of cloning the solution and reply the email sended to you with the link to access to the solution repository.