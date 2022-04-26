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

## Pools
Each collaborator can directly edit content in root directories called pools. There are two kinds of pools  — individual pools and the common pool. Every author maintains one individual pool with the same name as their GitHub username. The common pool is a directory named `!Common` , with fully collaborative notes.

When authors want to suggest edits to other authors' pools, they must [fork the project](https://github.com/Booodaness/Scientific-Notes/fork) , modify accordingly and start a pull request. After optional discussion in the request's review page, the changed pool's author (or the project's owner) may merge the pull request (or decline to do so).

Each pool has the following layout:

```
.
└── <Pool_name> 
    │
    ├── !Assets           (Non-markdown files)
    │   ├── Desmos        (Cached Desmos graphs)
    │   ├── Excalidraw    (Diagrams made with Excalidraw plugin)
    │   ├── Images        (Images used in articles)
    │   ├── Templates     (Templates made with Templates plugin)
    │   └── ...           (Other data collections)
    │
    ├── <Topic 1>         (e.g. 'Field Theory')
    │   ├── !start-here   (Ordered list linking to articles on Topic 1)
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

For both the cases above, your contributions will be considered for merging into the project. If an author maintains their notes regularly, they will be invited to become a collaborator, accepting which allows them to directly push their writings to the project.

Last but not the least, happy reading/writing! :)


