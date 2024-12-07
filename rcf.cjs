const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);

function kebabToPascalCase(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

function component(args) {
  function add(args) {
    const name = args[0];
    const optionArgs = args.slice(1);

    let lang = "jsx";

    for (const option of optionArgs) {
      if (!option.includes("-")) {
        console.error(`incorrect option syntax: ${option}`);
        exit(1);
      }

      const [key, value] = option.split("=");

      switch (key) {
        case "--lang":
          lang = value;
          break;
        default:
          console.error(`unknown option: ${key}`);
          exit(1);
      }
    }

    const componentPath = path.resolve(__dirname, "src", "components", name);
    const componentFile = path.resolve(
      componentPath,
      `${kebabToPascalCase(name)}.${lang}`
    );
    const reactContent = `import React from 'react';\nimport './${name}.css';\n\nconst ${kebabToPascalCase(
      name
    )} = () => {\n  return <div className="${name}"></div>;\n}\n\nexport default ${kebabToPascalCase(
      name
    )};`;
    const componentStyle = path.resolve(componentPath, `${name}.css`);

    if (!fs.existsSync(componentPath)) {
      fs.mkdirSync(componentPath, { recursive: true });
      fs.writeFileSync(componentFile, reactContent);
      fs.writeFileSync(componentStyle, "");

      fs.appendFileSync(
        path.resolve(__dirname, "src", "components", "index.js"),
        `export { default as ${kebabToPascalCase(
          name
        )} } from './${name}/${kebabToPascalCase(name)}';\n`
      );

      console.log(`Component ${name} created successfully!`);
    }
  }

    function remove(args) {
        const name = args[0];

        const componentPath = path.resolve(__dirname, "src", "components", name);

        if (fs.existsSync(componentPath)) {
            fs.rmSync(componentPath, { recursive: true, force: true });

            fs.writeFileSync(
                path.resolve(__dirname, "src", "components", "index.js").toString().replace(`export { default as ${kebabToPascalCase(name)} } from './${name}/${kebabToPascalCase(name)}';\n`, "")
            );

            console.log(`Component ${name} removed successfully!`);
        }
    }

    switch (args[0]) {
        case "add":
            add(args.slice(1));
            break;
        case "remove":
            remove(args.slice(1));
            break;
        default:
            console.error(`unknown command: component ${args[0]}`);
            exit(1);
    }
}

function section(args) {
    function add(args) {
        const name = args[0];
        const optionArgs = args.slice(1);

        let lang = "jsx";

        for (const option of optionArgs) {
            if (!option.includes("-")) {
                console.error(`incorrect option syntax: ${option}`);
                exit(1);
            }

            const [key, value] = option.split("=");

            switch (key) {
                case "--lang":
                    lang = value;
                    break;
                default:
                    console.error(`unknown option: ${key}`);
                    exit(1);
            }
        }

        const sectionPath = path.resolve(__dirname, "src", "sections", name);
        const sectionFile = path.resolve(
            sectionPath,
            `${kebabToPascalCase(name)}.${lang}`
        );
        const reactContent = `import React from 'react';\nimport './${name}.css';\n\nconst ${kebabToPascalCase(
            name
        )} = () => {\n  return <div className="${name}"></div>;\n}\n\nexport default ${kebabToPascalCase(
            name
        )};`;
        const sectionStyle = path.resolve(sectionPath, `${name}.css`);

        if (!fs.existsSync(sectionPath)) {
            fs.mkdirSync(sectionPath, { recursive: true });
            fs.writeFileSync(sectionFile, reactContent);
            fs.writeFileSync(sectionStyle, "");

            fs.appendFileSync(
                path.resolve(__dirname, "src", "sections", "index.js"),
                `export { default as ${kebabToPascalCase(
                    name
                )} } from './${name}/${kebabToPascalCase(name)}';\n`
            );

            console.log(`Section ${name} created successfully!`);
        }
    }

    function remove(args) {
        const name = args[0];

        const sectionPath = path.resolve(__dirname, "src", "sections", name);

        if (fs.existsSync(sectionPath)) {
            fs.rmSync(sectionPath, { recursive: true, force: true });

            const indexPath = path.resolve(__dirname, "src", "sections", "index.js");
            const indexContent = fs.readFileSync(indexPath, "utf-8");
            const updatedContent = indexContent.replace(
                `export { default as ${kebabToPascalCase(name)} } from './${name}/${kebabToPascalCase(name)}';\n`,
                ""
            );
            fs.writeFileSync(indexPath, updatedContent);

            console.log(`Section ${name} removed successfully!`);
        }
    }

    switch (args[0]) {
        case "add":
            add(args.slice(1));
            break;
        case "remove":
            remove(args.slice(1));
            break;
        default:
            console.error(`unknown command: section ${args[0]}`);
            exit(1);
    }
}

switch (args[0]) {
    case "component":
        component(args.slice(1));
        break;
    case "section":
        section(args.slice(1));
        break;
    default:
        console.error(`unknown command: ${args[0]}`);
        exit(1);
}
