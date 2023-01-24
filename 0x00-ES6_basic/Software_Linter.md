# Software Linter
## Definition
> A software linter also known as a “linter” is a tool used to identify and report potential issues (syntax errors, undeclared variables, etc.) in a program. It can even report convention or style inconsistencies. It does so by highlighting them so that the programmer is aware, so changes can be made. There are a wide variety of linters as well as lint rules for specific programming languages and even for software frameworks.

There are typically two ways to lint code:
- Actively
- Passively

## Active
Active checking is typically achieved by running a monitor tool that is constantly checking the file that your working on in order to spot inconsistencies and possible errors (e.g., having a specific linter along with some lint rules installed as a plug-in in your Code Editor).

## Passive
Passive checking is done by taking a piece of code, and manually running it through a tool to identify potential issues. For example, copying and pasting your code into a specific linter tool, or running the linter against a specific file using the command line. This tool can be installed locally or be available as a service (e.g., website on the Internet).

## Examples
Screenshot of an active linter ```pycodestyle``` (Python) integrated into Visual Studio Code

<img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/12/b2e79e0ac88cd12591148993013bd49df7c72ad0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230124T161707Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8827d28cbc519dd1e79b80bdd807ace0bb4b6e563971723466b33c61e31c9104">

Screenshot of an active linter ESLint (JavaScript) integrated into Visual Studio Code
<img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/12/e1df9b4b04c0f78ec98cb6ca581f513d15205f9e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230124T161707Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=de3f631a6ca0a3391d54f3964f2c2ed08bd9058285dd31b442527a36b8566124">

Screenshot of a passive online linter service JSON Formatter to validate a JSON data structure
<img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/12/e7ed9c91bb9712ca009602636a4996f733ea4a1c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230124T161707Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=186432e5473865ebec3d3b1bf5c43a0a202c0bb8ae2de6128ccf07a199ddc118">

<b>Fun fact</b>: The term “lint” was derived from the name of the tiny bits of fiber and fluff shed by clothing.

#### References
- [lint (software) - Wikipedia](https://en.wikipedia.org/wiki/Lint_(software))
- [ESLint - Pluggable JavaScript linter](https://eslint.org/)
- [pycodestyle - documentation](https://pycodestyle.pycqa.org/en/latest/)