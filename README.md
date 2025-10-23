# 🧠 algo-ts

A TypeScript-based solutions and testing library for common data structures and algorithms — organized by patterns such as Two Pointers, Hash Maps, Sliding Window, Trees, Graphs, and more.

In total 81 algorithm problems.

> 🚀 Built with TDD using Jest for clean, maintainable, and testable algorithm development.

---

## 📁 Project Structure

```
algo-ts/
│
├── src/
│ ├── 0-demo/ # Sandbox for quick testing
│ ├── 1-two-pointers/
│ │ ├── 1-sum.ts # Contains solution logic
│ │ └── 2-triple-sum.ts
│ ├── 2-hashmaps-and-sets/
│ ├── 3-linked-lists/
│ ├── 4-fast-and-slow-pointers/
│ └── ... (more patterns)
│
├── unit-test/
│ ├── 1-two-pointer-tests/
│ │ ├── 1-sum.test.ts
│ │ └── 2-triple-sum.test.ts
│ └── ... (mirrors src structure for test coverage)
│
├── node_modules/
├── package.json
├── tsconfig.json
└── README.md
```
---

## 🧪 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Shaobangzhu/algo-ts.git
cd algo-ts
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Run All Tests

```bash
npm test
```

---

## ✨ Features

<pre><code>
- 🧩 Clean, modular TypeScript implementations 
- ✅ Full test coverage with Jest 
- 📂 Organized by algorithm categories for easy navigation 
- 👨‍💻 Ideal for interview prep and TypeScript DSA practice 
- 💡 Includes test cases for edge, corner, and negative scenarios 
</code></pre>

## 📌 Algorithms Covered (WIP)

| Category             | Description                          |
| -------------------- | ------------------------------------ |
| Two Pointers         | e.g. 2-sum, 3-sum                    |
| HashMaps & Sets      | e.g. anagrams, duplicates            |
| Sliding Window       | e.g. max sum subarrays               |
| Fast & Slow Pointers | e.g. linked list cycles              |
| Trees                | DFS, BFS, recursion, binary trees    |
| Graphs               | DFS, BFS, topological sort, Dijkstra |
| Prefix Sums          | Range queries                        |
| Backtracking         | Permutations, combinations           |
| Dynamic Programming  | Knapsack, LIS, edit distance         |
| Greedy, Heaps, Tries | Advanced topics                      |

## 🔭 TODOs

<pre><code>
 - [ ] Add more patterns (like Union Find, Segment Trees)

 - [ ] Improve test readability with helper assertions

 - [ ] Add problem links from LeetCode or similar

 - [ ] Build CLI to run individual problems
</code></pre>

## 🧑‍💻 Author
Chaoran Lu

## 📄 License
MIT © 2025 Chaoran Lu