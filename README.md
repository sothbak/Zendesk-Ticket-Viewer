# Zendesk-Ticket-Viewer

A web application created with React and NodeJS that displays Zendesk support tickets. The application backend makes HTTP requests to the Zendesk API to retrieve tickets and then passes it back to the frontend which renders the tickets in a paged list format.

## How to run

### Step 1
Install Node JS from [here](https://nodejs.org/en/download/)

### Step 2
Clone the repository
```
git clone https://github.com/sothbak/Zendesk-Ticket-Viewer.git
```

### Step 3
cd into the directory
```
cd Zendesk-Ticket-Viewer
```

### Step 4
cd into Frontend and run npm install
```
cd Frontend
npm install
```

### Step 5
Do the same for the backend
(from the root directory)
```
cd Backend
npm install
```

### Step 6
Remaining in the Backend directory, create a .env for the username and password. It should contain this:
```
USER={username provided}
PASSWORD={password provided}
```

### Step 7
Whilst still in the Backend directory, run npm start
```
npm start
```

### Step 8
cd back to the root directory and then into Frontend and run npm start on a different terminal
```
npm start
```

## How to run tests
From the root directory, cd to Frontend and run npm test
```
cd Frontend
npm test
```

