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

## Directory structure
### Pools
Each contributor can directly edit content in root directories called pools. There are two kinds of pools  — individual pools, and the common pool. Each author maintains one individual pool with the same name as their GitHub username. The common pool is a directory named ```!Common``` , with fully collaborative notes. Thus, each contributor can freely edit their own individual pools, and the common pool.

When collaborators want to suggest edits to other authors' pools, they must [fork the project](https://github.com/Booodaness/Scientific-Notes/fork) , modify accordingly and start a pull request. After optional discussion in the request's review page, the changed pool's author (or an admin) may merge the pull request (or decline to do so).

Each pool has the following layout:

```
├── <author_username/!Common> 
│   │
│   ├── !Assets         (Non-markdown files)
│   │   ├── Excalidraw  (Diagrams made with the same community plugin)
│   │   ├── Images      (Static images)
│   │   └── Templates   (Templates made with the same core plugin)
│   │
│   ├── <Topic_1>       (e.g. 'Field Theory')
│   │   ├── !start-here
│   │   ├── !to-do
```


## Contributing
Firstly, [fork this repository](https://github.com/Booodaness/Scientific-Notes/fork) and follow [these steps](#to-view-locally), but for the fork instead of the original repository. Now,

### Adding personal notes
1. Ensure that the parent directory of your notes has the layout of a [pool](#).

