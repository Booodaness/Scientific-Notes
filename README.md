# Scientific Notes

## About
![Graph view](!Common/!Assets/Images/graph.png)

This repository is a collection of regularly updated, collaborative, open-source notes on various topics in mathematical physics, physics and mathematics.

The project has the structure of an [Obsidian](https://obsidian.md/) vault.

## Viewing locally
1. [Download Obsidian](https://obsidian.md/download). (You could alternatively use Markdown processors such as [StackEdit](https://stackedit.io/) or [Dillinger](https://dillinger.io/), but some features such as wikilinks, extended markdown etc. may be unavailable).

2. Make sure you have [Git](https://git-scm.com/), then open Git bash and clone this repository into your system:

```
cd <parent_directory>

git clone https://github.com/Booodaness/Scientific-Notes
```

3. Open `<parent_directory>/Scientific-Notes` as a new Obsidian vault.

4. Install plugins as described in (PLUGINS.md)[PLUGINS.md].

## Pools
Each collaborator can directly edit content in root directories called pools. There are two kinds of pools  — individual pools and the common pool. Every author maintains an individual pool with the same name as their GitHub username. There is a second individual pool authors can optionally use, `!Local`. As it is included in the `.gitignore` file, all its contents are stored only locally in the respective author's systems. This feature is for keeping private notes, while making them locally linkable to the public ones. However, we recommend authors to maintain the public notes as much as possible since it is the primary aim of this project. Lastly, we have the common pool with fully collaborative notes, in the directory `!Common`.

When authors want to suggest edits to other authors' pools, they must [fork the project](https://github.com/Booodaness/Scientific-Notes/fork) , modify accordingly and start a pull request. After optional discussion in the request's review page, the changed pool's author (or the project's owner) may merge the pull request (or decline to do so).

Each pool has the following layout:

```
.
└── <Pool_name> 
    │
    ├── !Assets           (Non-markdown files)
    │   ├── Desmos        (Cached Desmos graphs)
    │   ├── Excalidraw    (Diagrams made with 'Excalidraw' plugin)
    │   ├── Images        (Images used in articles)
    │   ├── Presentations (Presentations made with 'Advanced Slides' plugin)
    │   ├── Templates     (Templates made with 'Templates' plugin)
    │   └── ...           (Other data collections)
    │
    ├── !Uncategorized    (Uncategorized notes)
    │   ├── !to-do        (Kanban)
    │   ├── article-1     (e.g. 'quantum-mechanics.md')
    │   └── ...           (Other articles)
    │
    ├── <Topic 1>         (e.g. 'Field Theory')
    │   ├── !contents     (Contents page linking to articles on Topic 1)
    │   ├── !to-do        (Kanban for Topic 1)
    │   ├── article-1     (e.g. 'principle-of-stationary-action.md')
    │   └── ...           (Other articles)
    │
    ├── ...               (Other Topics)
    │
    └── !to-do            (Kanban for entire pool)
```

The exclamation marks before folder/file names indicate that they are contextually different from the main content of the folders/files in their parent directory. For example, `<Pool_name>/<Topic_1>` is primarily for articles related to the topic, so extra files such as `!start-here` and `!to-do` have the `!` prefix.

## Directory structure
The complete repository has the structure:

```
.
│
├── !Common    (Common pool)
│
├── !Local     (Local individual pool)
│
├── <Author_1> (Individual pool for Author_1)
│
├── ...        (Other individual pools)
│
├── LICENCE.md (Licence statement)
│
├── plugins.md (Plugins used)
│
└── README.md  (Documentation)
```

## Contributing
Firstly, [fork this repository](https://github.com/Booodaness/Scientific-Notes/fork) and follow the steps for [viewing locally](#viewing-locally), but for the fork instead of the original repository. Now, for:

### Adding personal notes
1. Ensure that the parent directory of your notes has the layout of a [pool](#pools).
2. Place your pool in the root.
3. Start a pull request.

### Editing the common pool
1. Edit your fork as desired.
2. Verify that the structure of the common pool has not been altered.
3. Start a pull request.
4. Document your edits in the review page of the pull request.

After completing the above steps, your contributions will be considered for merging into the project. If an author maintains their notes regularly, they will be invited to become a collaborator, accepting which allows them to directly push their writings to the project.

Last but not the least, happy reading/writing! :)


