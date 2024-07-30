# Welcome to your GPT Engineer project

## Project info

**Project**: moneyflow-nexus 

**URL**: https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve

**Description**: Create money transfer management application, There are two main actors: U.S. executive and a Cameroon executive. Both parties can log in and log out of the system using their credentials, which will be recorded in the system.
The U.S executive, after receiving money from the person willing to send money to Cameroon, initiates a transaction by filling in all the details in a form, some of which will be explained in the diagram below. Once submitted, the Cameroonian executive is notified of a new transaction awaiting processing. They validate the transaction and change the status to 'processing.' After this, they send the money locally to the recipient using the details on the system and the preferred payment method. Finally, they update the status of the transaction again on the system to 'complete.' The system now records this transaction as successful, adds it to the accounts, and notifies the U.S executive of the completion status. The US Exec class has administrative privileges on the system, including the ability to initiate transactions and manage employee accounts.
When a US Exec initiates a transaction, the system records it and creates a notification for the employee in Cameroon. Upon receiving the notification, the employee updates the transaction status to "processing" and proceeds to send the money locally. Once the transaction is complete, the status is updated again to indicate the new state of completion. Subsequently, the system notifies the US Exec of the completion, records the transaction for future tracking.
In summary, the information above gives a brief overview of the system design and functionality. There is room for improvement and for adding more features as needed. From here, we will proceed with designing the application's user interfaces for mobile and desktop. Please feel free to ask any questions if something about the system's functionality is not clear. 

## Who is the owner of this repository?
By default, GPT Engineer projects are created with public GitHub repositories.

However, you can easily transfer the repository to your own GitHub account by navigating to your [GPT Engineer project](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and selecting Settings -> GitHub. 

## How can I edit this code?
There are several ways of editing your application.

**Use GPT Engineer**

Simply visit the GPT Engineer project at [GPT Engineer](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and start prompting.

Changes made via gptengineer.app will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the GPT Engineer UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps: 

```sh
git clone https://github.com/GPT-Engineer-App/moneyflow-nexus.git
cd moneyflow-nexus
npm i

# This will run a dev server with auto reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

All GPT Engineer projects can be deployed directly via the GPT Engineer app. 

Simply visit your project at [GPT Engineer](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain, then we recommend GitHub Pages.

To use GitHub Pages you will need to follow these steps: 
- Deploy your project using GitHub Pages - instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
- Configure a custom domain for your GitHub Pages site - instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)