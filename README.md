## PROMPTOPIA 
Promptopia is an open-source AI prompting tool for the modern world to discover, create, and share creative prompts.

### 🛠️ HOW TO USE THIS REPO 
STEP 1: Clone the project.
   - Launch your terminal and navigate to the directory where you want to store the project (e.g., cd Documents/Projects).
   - Paste the code below in your terminal
   ```bash
    git clone https://github.com/tireddev24/promptopia
   ```
STEP 2: Install Dependencies
  - Navigate into the `promptopia` folder that was just created and run the command: 
  ```bash
    npm install
  ```
  - This installs all dependencies included in the `package.json` file

STEP 3: Configure Environment Variables
  - In the root folder, create a file named ".env" and add the following to the file:
     
     ```bash
           GOOGLE_ID = {{your_google_ID}}
           GOOGLE_SECRET = {{your_google_secret}}

           MONGODB_URI = {{your_mongodb_connection_string}}
           
           NEXTAUTH_URL = http://localhost:3000
           NEXTAUTH_URL_INTERNAL = http://localhost:3000
           NEXTAUTH_SECRET = {{your_nextauth_secret}}


           GITHUB_ID = {{your_github_ID}}
           GITHUB_SECRET = {{your_github_secret}}
       ```

     Visit the following links for further guidance
    - [Google OAUTH](https://youtu.be/AbUVY16P4Ys?t=431)
    - [GitHub OAUTH](https://youtu.be/Bx1JqfPROXA?t=226)
    - [Setting Up MongoDB](https://youtu.be/gDOKSgqM-bQ?si=3u9rWBHa2kWREZ1w)

STEP 4: Run The Development Server
   - Use this command to start the development server:
   ```bash
      npm run dev
   ```
   - Access the application in your browser with the URL provided in your terminal
         Typically, the URL with be `http://localhost:3000`
      

### 📝 THINGS TO NOTE
- You need a stable internet connection to successfully clone the repo and install dependencies

