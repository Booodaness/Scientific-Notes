/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/main.ts
__export(exports, {
  default: () => SettingsSearch
});
var import_obsidian = __toModule(require("obsidian"));

// node_modules/monkey-around/mjs/index.js
function around(obj, factories) {
  const removers = Object.keys(factories).map((key) => around1(obj, key, factories[key]));
  return removers.length === 1 ? removers[0] : function() {
    removers.forEach((r) => r());
  };
}
function around1(obj, method, createWrapper) {
  const original = obj[method], hadOwn = obj.hasOwnProperty(method);
  let current = createWrapper(original);
  if (original)
    Object.setPrototypeOf(current, original);
  Object.setPrototypeOf(wrapper, current);
  obj[method] = wrapper;
  return remove;
  function wrapper(...args) {
    if (current === original && obj[method] === wrapper)
      remove();
    return current.apply(this, args);
  }
  function remove() {
    if (obj[method] === wrapper) {
      if (hadOwn)
        obj[method] = original;
      else
        delete obj[method];
    }
    if (current === original)
      return;
    current = original;
    Object.setPrototypeOf(wrapper, original || Function);
  }
}

// src/main.ts
var SettingsSearch = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    __publicField(this, "settingsSearchEl", createDiv("settings-search-container vertical-tab-header-group"));
    __publicField(this, "settingsResultsContainerEl", createDiv("settings-search-results-container vertical-tab-content"));
    __publicField(this, "settingsNavItemContainer", this.settingsSearchEl.createDiv("vertical-tab-header-group-items").createDiv("vertical-tab-nav-item settings-search-input"));
    __publicField(this, "settingsResultsEl");
    __publicField(this, "search");
    __publicField(this, "locale");
    __publicField(this, "resources", []);
    __publicField(this, "results", []);
    __publicField(this, "tabIndex", 0);
    __publicField(this, "pluginTabIndex", 0);
    __publicField(this, "settingCache", new Map());
    __publicField(this, "searchAppended", false);
  }
  async onload() {
    this.app.workspace.onLayoutReady(async () => {
      this.settingsResultsContainerEl.createEl("h3", {
        text: "Settings Search Results"
      });
      this.settingsResultsEl = this.settingsResultsContainerEl.createDiv("settings-search-results");
      this.buildSearch();
      this.buildResources();
      this.buildPluginResources();
      this.patchSettings();
    });
  }
  buildResources() {
    const tab = this.app.setting.settingTabs[this.tabIndex];
    if (tab) {
      this.getTabResources(tab);
      this.tabIndex++;
      setImmediate(() => this.buildResources());
    }
  }
  buildPluginResources() {
    const tab = this.app.setting.pluginTabs[this.pluginTabIndex];
    if (tab) {
      this.getTabResources(tab);
      this.pluginTabIndex++;
      setImmediate(() => this.buildPluginResources());
    }
  }
  get manifests() {
    return Object.values(this.app.plugins.manifests);
  }
  addResourceToCache(resource) {
    const setting = new import_obsidian.Setting(createDiv()).setName(resource.text).setDesc(createFragment((e) => e.createDiv().innerHTML = resource.desc ?? ""));
    if (resource.tab == "community-plugins") {
      let plugin = this.manifests.find((p) => p.name == resource.text);
      if (plugin && this.app.plugins.getPlugin(plugin.id)?._loaded && this.app.setting.pluginTabs.find((t) => t.id == plugin.id)) {
        setting.addExtraButton((b) => {
          b.setTooltip(`Open ${resource.text} Settings`).onClick(() => {
            this.app.setting.openTabById(plugin.id);
          });
        });
      }
    }
    if (resource.tab == "plugins") {
      const plugins = Object.values(this.app.internalPlugins.plugins);
      const plugin = plugins.find((p) => p._loaded && p.instance.name == resource.text);
      if (plugin && this.app.setting.pluginTabs.find((t) => t.id == plugin.instance.id)) {
        setting.addExtraButton((b) => {
          b.setTooltip(`Open ${resource.text} Settings`).onClick(() => {
            this.app.setting.openTabById(plugin.instance.id);
          });
        });
      }
    }
    setting.addExtraButton((b) => {
      b.setIcon("forward-arrow").onClick(() => {
        this.showResult(resource);
      });
    });
    this.settingCache.set(resource.text, setting);
  }
  getResourceFromCache(resource) {
    if (!this.settingCache.has(resource.text)) {
      this.addResourceToCache(resource);
    }
    return this.settingCache.get(resource.text);
  }
  removeResourcesFromCache(resources) {
    for (const resource of resources) {
      this.settingCache.delete(resource.text);
    }
  }
  getTabResources(tab) {
    tab.display();
    const settings = tab.containerEl.querySelectorAll(".setting-item:not(.setting-item-header)");
    for (const el of Array.from(settings)) {
      const text = el.querySelector(".setting-item-name")?.textContent;
      if (!text)
        continue;
      const desc = el.querySelector(".setting-item-description")?.innerHTML ?? "";
      const resource = {
        tab: tab.id,
        name: tab.name,
        text,
        desc
      };
      this.resources.push(resource);
      this.addResourceToCache(resource);
    }
    if (this.app.setting.activeTab?.id == tab.id)
      return;
    tab.containerEl.detach();
    tab.hide();
  }
  patchSettings() {
    const self = this;
    this.register(around(this.app.setting, {
      onOpen: function(next) {
        return function() {
          next.apply(this);
          self.search.inputEl.focus();
          return next;
        };
      }
    }));
    this.register(around(this.app.setting, {
      addSettingTab: function(next) {
        return function(tab) {
          self.getTabResources(tab);
          return next.call(this, tab);
        };
      }
    }));
    this.register(around(this.app.setting, {
      removeSettingTab: function(next) {
        return function(tab) {
          if (this.isPluginSettingTab(tab)) {
            const removing = self.resources.filter((t) => t.tab == tab.id);
            self.resources = self.resources.filter((t) => t.tab != tab.id);
            self.removeResourcesFromCache(removing);
          }
          return next.call(this, tab);
        };
      }
    }));
    this.register(around(this.app.setting, {
      openTab: function(next) {
        return function(tab) {
          self.searchAppended = false;
          return next.call(this, tab);
        };
      },
      openTabById: function(next) {
        return function(tab) {
          self.searchAppended = false;
          return next.call(this, tab);
        };
      }
    }));
  }
  buildSearch() {
    const tempSetting = new import_obsidian.Setting(createDiv()).addSearch((s) => {
      this.search = s;
    });
    this.settingsNavItemContainer.append(tempSetting.controlEl);
    tempSetting.settingEl.detach();
    this.search.onChange((v) => {
      this.onChange(v);
    });
    this.search.setPlaceholder("Search settings...");
    this.app.setting.tabHeadersEl.prepend(this.settingsSearchEl);
  }
  onChange(v) {
    if (!v) {
      this.app.setting.openTabById(this.app.setting.lastTabId);
      this.searchAppended = false;
      return;
    }
    if (!this.searchAppended) {
      this.app.setting.activeTab.navEl.removeClass("is-active");
      this.app.setting.tabContentContainer.empty();
      this.app.setting.tabContentContainer.append(this.settingsResultsContainerEl);
      this.searchAppended = true;
    }
    this.appendResults(this.performFuzzySearch(v));
  }
  getMatchText(text, result) {
    const matchElements = {};
    return createFragment((content) => {
      for (let i = 0; i < text.length; i++) {
        let match = result.matches.find((m) => m[0] === i);
        if (match) {
          const index = result.matches.indexOf(match);
          if (!matchElements[index]) {
            matchElements[index] = createSpan("suggestion-highlight");
          }
          let element = matchElements[index];
          content.appendChild(element);
          element.appendText(text.substring(match[0], match[1]));
          i += match[1] - match[0] - 1;
          continue;
        }
        content.appendText(text[i]);
      }
    });
  }
  appendResults(results) {
    this.settingsResultsEl.empty();
    if (results.length) {
      const headers = {};
      for (const resource of results) {
        if (!(resource.tab in headers)) {
          if (resource.tab == "hotkeys") {
            headers[resource.tab] = createDiv();
          } else {
            headers[resource.tab] = this.settingsResultsEl.createDiv();
          }
          new import_obsidian.Setting(headers[resource.tab]).setHeading().setName(resource.name);
        }
        const setting = this.getResourceFromCache(resource);
        headers[resource.tab].append(setting.settingEl);
      }
      if ("hotkeys" in headers) {
        this.settingsResultsEl.appendChild(headers["hotkeys"]);
      }
    } else {
      this.settingsResultsEl.setText("No results found :(");
    }
  }
  showResult(result) {
    this.search.setValue("");
    const tab = this.app.setting.settingTabs.find((t) => t.id == result.tab) ?? this.app.setting.pluginTabs.find((t) => t.id == result.tab);
    if (!tab) {
      new import_obsidian.Notice("There was an issue opening the setting tab.");
      return;
    }
    this.app.setting.openTabById(tab.id);
    try {
      const names = tab.containerEl.querySelectorAll(".setting-item-name");
      const el = Array.from(names).find((n) => n.textContent == result.text);
      if (!el)
        return;
      const setting = el.closest(".setting-item");
      if (!setting)
        return;
      if (tab.id == "obsidian-style-settings") {
        let collapsed = setting.closest(".style-settings-container");
        let previous = collapsed?.previousElementSibling;
        while (previous != null && previous.hasClass("is-collapsed") && previous.hasClass("style-settings-heading")) {
          previous.removeClass("is-collapsed");
          collapsed = collapsed.parentElement?.closest(".style-settings-container");
          previous = collapsed?.previousElementSibling;
        }
      }
      setting.scrollIntoView(true);
      setting.addClass("is-flashing");
      this.registerInterval(window.setTimeout(() => setting.removeClass("is-flashing"), 3e3));
    } catch (e) {
      console.error(e);
    }
  }
  performFuzzySearch(input) {
    const results = [];
    for (const resource of this.resources) {
      let result = (0, import_obsidian.prepareSimpleSearch)(input)(resource.text) ?? (0, import_obsidian.prepareSimpleSearch)(input)(resource.desc);
      if (result) {
        results.push(resource);
      }
    }
    this.results = results;
    return results;
  }
  onunload() {
    this.settingsSearchEl.detach();
    this.settingsResultsEl.detach();
    if (this.searchAppended)
      this.app.setting.openTabById(this.app.setting.lastTabId);
  }
};