# Rain to River (R2R) Strategy Explorer

An interactive web application for exploring strategy dependencies, prerequisites, and implementation triggers across the 10-year **Rain to River (R2R)** strategic roadmap (2026–2036).

---

## 🚀 How to Run

This application uses a **No-Build Architecture**, meaning:
* **No installation required**: You do **not** need Node.js, `npm`, or any build tools.
* **No web server required**: Simply **double-click `index.html`** or drag it into any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari).

---

## 🗺️ User Guide: Navigating the Explorer

The Strategy Explorer provides two main visual modes for analyzing strategies and their dependencies.

### 1. View Modes
* **Network Graph**: An interactive, hierarchical network chart powered by `Vis.js`. Nodes are arranged in swimlanes corresponding to their wave, with directed arrows showing dependency triggers.
* **Wave Swimlane**: A Kanban-style layout organizing strategies into vertical columns corresponding to **Wave 0 (Pre-Reqs)** through **Wave 4 (Sustain)**.

### 2. Dependency Tracking & Highlighting
Clicking on any node/card activates **Dependency Highlighting**:
* 🔵 **Selected Item**: Highlighted in indigo.
* 🟠 **Direct Prerequisites**: Highlighted in orange (items that must be completed *before* this item).
* 🟢 **Direct Unlocks**: Highlighted in green (items enabled *after* this item is completed).
* ⚪ **Indirect Dependencies**: Faded background to help trace the full upstream and downstream path.
* **Click outside** or click the close button on the active selection banner to clear highlights.

### 3. Toolbar & Filters
* **Wave Filter (`All`, `W0`–`W4`)**: Filter the graph or swimlane view to focus on specific timeline waves.
* **Search Bar**: Search strategies instantly by ID (e.g., `3.1`, `W0-01`) or title keywords.
* **Detail Drawer**: Selecting any item opens a slide-out panel showing:
  * Executive rationale ("Why This Exists").
  * Key Phase 1 deliverables and outputs.
  * Interactive prerequisite & unlock buttons (click to jump directly to connected strategies).
  * Phase Action Checklist (Phase 1 through Phase 4 progression).

### 4. Data Management Features
* **+ Add Item / Wave 0**: Open an in-app dialog to draft a new strategy or Wave 0 item.
* **Export (Download Icon)**: Download the current dataset (including any in-app edits) as a clean `r2r_data.json` file.
* **Reset (Refresh Icon)**: Clear local browser changes and reset back to the default `data.js` file.

---

## ✍️ User Guide: Updating Data & Code

The project structure is split into two primary files to make updating easy:

```
R2R_StrategyExplorer/
├── index.html   # Main application structure, styling, and React code
├── data.js      # Isolated strategy dataset (easy for non-developers to edit)
└── README.md    # Documentation and usage guide
```

### Updating Data (`data.js`)

All strategy content is stored in `data.js`. Non-technical team members can edit this file in any basic text editor (Notepad, VS Code, TextEdit) without risking breaking the application logic.

#### Data Schema Example:
```javascript
window.INITIAL_R2R_DATA = [
    {
        id: "3.1",                                // Unique ID (e.g., W0-01 or 3.1)
        title: "Define Clear Levels of Service", // Strategy title
        wave: 1,                                 // Wave number (0, 1, 2, 3, or 4)
        timeframe: "2026–2028",                  // Execution timeframe
        rationale: "Build shared internal clarity on Promises...",
        keyOutput: "Approved Executive LOS Framework",
        prereqs: ["W0-01", "2.3", "1.4"],        // Array of prerequisite IDs
        unlocks: ["3.2", "3.3", "2.2"],          // Array of downstream unlock IDs
        phases: {
            p1: "Inventory current service norms and adopt framework.",
            p2: "Integrate LOS into Maximo and DSS.",
            p3: "Conduct 2nd revision cycle.",
            p4: "Publish annual performance report."
        }
    },
    // ...
];
```

#### How to Add or Modify Strategies in `data.js`:
1. Open `data.js`.
2. Locate or add an item object inside `window.INITIAL_R2R_DATA`.
3. Ensure `prereqs` and `unlocks` contain matching `id` strings of related strategies (cross-references are automatically normalized by the app).
4. Save `data.js` and refresh `index.html` in your browser.

---

### Navigating & Modifying Application Code (`index.html`)

`index.html` houses the styling, external libraries, and React application components in an inline Babel block (`<script type="text/babel">`).

#### Layout of `index.html`:
* **Header / Head (`<head>`)**: Contains CDNs for React 18, Babel Standalone, Tailwind CSS, Vis Network, and custom CSS animations (`@keyframes slideIn`).
* **Root Mount (`<div id="root">`)**: HTML container where React renders the app.
* **External Script (`<script src="data.js">`)**: Loads `window.INITIAL_R2R_DATA` into memory before the React app initializes.
* **React Application (`<script type="text/babel">`)**:
  * `Icons`: SVG icon collection for UI elements.
  * `normalizeData()`: Helper function that ensures all prerequisites and unlocks are bidirectionally linked.
  * `NetworkGraph`: Component wrapping `vis.Network` for 2D node graph rendering and interactive highlighting logic.
  * `SwimlaneView`: Column grid component for Wave swimlanes.
  * `DetailDrawer`: Slide-out panel for strategy details.
  * `AddItemModal`: Form dialog for drafting new strategy items.
  * `App`: Main parent component managing application state (view mode, active filters, selected items, local storage sync).
