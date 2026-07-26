# Git Hands-on Assignments (1 to 5) - Solutions & Walkthrough

This document contains step-by-step solutions, command logs, and explanations for all 5 mandatory **Git Hands-on Labs**.

---

## 📌 Exercise 1: Basic Git Configuration & First Repository Setup (`Git-HOL 1`)

### Objectives
- Configure Git global settings (Username, Email, Default Editor).
- Initialize a local git repository (`GitDemo`).
- Track, stage, and commit files (`welcome.txt`).

### Commands & Step-by-Step Execution

1. **Verify Git Installation:**
   ```bash
   git --version
   ```

2. **Configure User Details:**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **Verify Configuration:**
   ```bash
   git config --list
   ```

4. **Configure Default Text Editor (e.g., VS Code or Notepad++):**
   ```bash
   # For VS Code:
   git config --global core.editor "code --wait"
   
   # Or for Notepad++:
   git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
   ```

5. **Initialize Project Repository (`GitDemo`):**
   ```bash
   mkdir GitDemo
   cd GitDemo
   git init
   ```

6. **Create and Add File (`welcome.txt`):**
   ```bash
   echo "Welcome to Git Version Control System" > welcome.txt
   git status
   git add welcome.txt
   git commit -m "Add welcome.txt to repository"
   ```

---

## 📌 Exercise 2: Ignoring Unwanted Files (`Git-HOL 2`)

### Objectives
- Understand `.gitignore`.
- Ignore `.log` extension files and `log/` directories from Git tracking.

### Commands & Step-by-Step Execution

1. **Create Log Files & Folders in Repository:**
   ```bash
   touch app.log server.log
   mkdir -p logs
   touch logs/debug.log
   ```

2. **Create `.gitignore` file:**
   ```gitignore
   # Ignore all log files
   *.log
   
   # Ignore log directories
   logs/
   log/
   ```

3. **Verify Git Status:**
   ```bash
   git status
   ```
   *Expected Outcome:* `app.log`, `server.log`, and `logs/` directory are untracked and ignored by Git.

4. **Commit `.gitignore`:**
   ```bash
   git add .gitignore
   git commit -m "Add .gitignore to ignore log files and directories"
   ```

---

## 📌 Exercise 3: Branching & Merging (`Git-HOL 3`)

### Objectives
- Create and manage local branches.
- Switch between branches (`git checkout` / `git switch`).
- Merge branch changes back into `main` / `master`.

### Commands & Step-by-Step Execution

1. **Create & Switch to New Branch (`GitNewBranch`):**
   ```bash
   git branch GitNewBranch
   git checkout GitNewBranch
   # Or using single command: git checkout -b GitNewBranch
   ```

2. **Verify Current Active Branch:**
   ```bash
   git branch -a
   ```
   *Note: Active branch is highlighted with `*`.*

3. **Add Files in Branch:**
   ```bash
   echo "Feature updates in new branch" > feature.txt
   git add feature.txt
   git commit -m "Add feature.txt in GitNewBranch"
   ```

4. **Switch back to `main` and Merge:**
   ```bash
   git checkout main
   git diff main..GitNewBranch
   git merge GitNewBranch
   ```

5. **Inspect Log & Delete Merged Branch:**
   ```bash
   git log --oneline --graph --decorate
   git branch -d GitNewBranch
   ```

---

## 📌 Exercise 4: Resolving Merge Conflicts (`Git-HOL 4`)

### Objectives
- Simulate and resolve merge conflicts when identical file lines are modified across branches.

### Commands & Step-by-Step Execution

1. **Create Branch (`GitWork`) & Add `hello.xml`:**
   ```bash
   git checkout -b GitWork
   echo "<greeting>Hello from GitWork branch</greeting>" > hello.xml
   git add hello.xml
   git commit -m "Add hello.xml on GitWork branch"
   ```

2. **Switch to `main` and Create Conflicting `hello.xml`:**
   ```bash
   git checkout main
   echo "<greeting>Hello from main branch</greeting>" > hello.xml
   git add hello.xml
   git commit -m "Add hello.xml on main branch"
   ```

3. **Attempt Merging `GitWork` into `main`:**
   ```bash
   git merge GitWork
   ```
   *Output:* `CONFLICT (add/add): Merge conflict in hello.xml. Automatic merge failed; fix conflicts and then commit the result.`

4. **Resolve Conflict:**
   Open `hello.xml` and resolve the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`):
   ```xml
   <greeting>Hello from main branch & GitWork combined</greeting>
   ```

5. **Complete Conflict Resolution Commit & Clean up:**
   ```bash
   git add hello.xml
   git commit -m "Resolve merge conflict in hello.xml"
   git branch -d GitWork
   git log --oneline --graph --decorate
   ```

---

## 📌 Exercise 5: Remote Synchronization & Push (`Git-HOL 5`)

### Objectives
- Link local repository with remote repository (`origin`).
- Fetch, pull, and push commits cleanly.

### Commands & Step-by-Step Execution

1. **Add Remote Origin:**
   ```bash
   git remote add origin https://github.com/aryannlol/cognizant-assignments.git
   ```

2. **Pull Remote Changes with Rebase / Merge:**
   ```bash
   git pull origin main --rebase
   ```

3. **Push Local Commits to Remote:**
   ```bash
   git push origin main
   ```
