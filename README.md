# Frontend Development Exercises

Welcome to the Frontend Development Exercises repository! This collection of projects is designed to help you improve your skills in HTML, CSS, and JavaScript through hands-on practice.

## Projects

This repository contains the following projects:

1. **Todo List**: A simple application to manage your tasks.
2. **Calculator**: A basic calculator with arithmetic operations.
3. [Additional projects will be listed here as they are added]

Each project has its own directory with a specific README file containing detailed instructions and requirements.

## Getting Started (USE THIS IF YOU DON'T HAVE GITKRAKEN)

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/igdel/exercises.git
   ```
2. Navigate to the project directory you want to work on.
3. Read the project-specific README for detailed instructions.

## Git Workflow and Conventional Commits

This repository follows the Conventional Commits specification. This standard helps create an explicit commit history, making it easier to write automated tools on top of it. It also makes it easier for people to contribute to your projects by providing a structured commit message format.

### Commit Message Format

Each commit message consists of a **header**, a **body**, and a **footer**. The header has a special format that includes a **type**, an optional **scope**, and a **description**:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

The commit type can be one of the following:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Examples

Here are some examples of conventional commits:

```
feat: add new todo item functionality
^--^  ^-----------------------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: feat, fix, docs, style, refactor, perf, test, or chore.
```

```
fix(calculator): resolve division by zero error
^-^  ^--------^  ^----------------------------^
|    |           |
|    |           +-> Summary in present tense.
|    |
|    +-> Optional scope
|
+-------> Type: feat, fix, docs, style, refactor, perf, test, or chore.
```

```
docs: update README with conventional commits info

This commit adds information about Conventional Commits to the main README file. It explains the commit message format and provides examples.

Closes #123
```

### Why Use Conventional Commits?

1. Automatically generating CHANGELOGs.
2. Automatically determining a semantic version bump (based on the types of commits landed).
3. Communicating the nature of changes to teammates, the public, and other stakeholders.
4. Triggering build and publish processes.
5. Making it easier for people to contribute to your projects, by allowing them to explore a more structured commit history.

For more information, visit the [Conventional Commits website](https://www.conventionalcommits.org/).

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes using the Conventional Commits format
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [JavaScript.info](https://javascript.info/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to all contributors who have helped with these exercises.
- Special thanks to the open-source community for providing valuable resources and tools.

Happy coding!
