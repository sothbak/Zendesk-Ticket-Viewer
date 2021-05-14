# Zendesk-Ticket-Viewer

A web application that connects to the Zendesk API and displays the support tickets in a list. The application backend makes requests to the Zendesk API to retrieve tickets and then passes it along to the frontend which renders the tickets in a paged list format.

## How to run

### Step 1
Install Node JS from [here](https://nodejs.org/en/download/)

### Step 2
Clone the repository
```
git clone https://github.com/sothbak/Zendesk-Ticket-Viewer.git
```

### Step 3
cd into Frontend and run npm install
```
cd Frontend
npm install
```

### Step 4
Do the same for the backend
(from the root directory)
```
cd Backend
npm install
```

### Step 5
Remaining in the Backend directory, create a .env for the username and password. It should contain this:
```
USER={username provided}
PASSWORD={password provided}
```

### Step 6
Whilst still in the Backend directory, run npm start
```
npm start
```

### Step 7
cd back to the root directory and then into Frontend and run npm start on a different terminal
```
npm start
```

## How to run tests
Navigate to Frontend and run npm test
```
npm test
```

