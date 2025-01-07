const tasks = [
  {
    title: "Day 1: Graph Basics and Traversals",
    notes: "Study graph representations and implement BFS/DFS.",
    dueDate: "2025-01-08T23:59:59.000Z",
    startDate: "2025-01-08T00:00:00.000Z",
    subtasks: [
      "Study graph representations (adjacency list, adjacency matrix, objects & pointers in Python)",
      "Implement BFS using collections.deque",
      "Implement DFS using recursion",
      "Analyze time and space complexity",
    ],
  },
  {
    title: "Day 2: Shortest Paths and Topological Sort",
    notes:
      "Study BFS for shortest paths, Dijkstra's Algorithm, and Topological Sort.",
    dueDate: "2025-01-09T23:59:59.000Z",
    startDate: "2025-01-09T00:00:00.000Z",
    subtasks: [
      "Learn BFS for shortest paths",
      "Study Dijkstra's Algorithm and its use cases",
      "Implement Dijkstra's using heapq",
      "Study and implement Topological Sort",
    ],
  },
  {
    title: "Day 3: Advanced Graph Algorithms & Data Structures",
    notes: "Cycle detection, MST, and Union-Find.",
    dueDate: "2025-01-10T23:59:59.000Z",
    startDate: "2025-01-10T00:00:00.000Z",
    subtasks: [
      "Study Cycle Detection",
      "Study Kruskal and Prim's Algorithms",
      "Implement Union-Find with optimizations",
      "Review Python's data structures (list, dict, set, etc.)",
    ],
  },
  {
    title: "Day 4: Dynamic Programming Basics",
    notes: "Memoization and tabulation approaches.",
    dueDate: "2025-01-11T23:59:59.000Z",
    startDate: "2025-01-11T00:00:00.000Z",
    subtasks: [
      "Study Memoization and Tabulation",
      "Solve Fibonacci problem",
      "Solve LCS problem",
      "Analyze time and space complexity",
    ],
  },
  {
    title: "Day 5: Advanced DP Problems",
    notes: "0/1 Knapsack, Edit Distance, LIS.",
    dueDate: "2025-01-12T23:59:59.000Z",
    startDate: "2025-01-12T00:00:00.000Z",
    subtasks: [
      "Study 0/1 Knapsack",
      "Solve Edit Distance",
      "Solve Longest Increasing Subsequence (LIS)",
      "Analyze time and space complexity",
    ],
  },
  {
    title: "Day 6: Backtracking",
    notes:
      "Study backtracking techniques like N-Queens, Sudoku Solver, and Word Search.",
    dueDate: "2025-01-13T23:59:59.000Z",
    startDate: "2025-01-13T00:00:00.000Z",
    subtasks: [
      "Solve N-Queens problem",
      "Solve Sudoku Solver",
      "Solve Word Search",
      "Understand recursion depth handling",
    ],
  },
  {
    title: "Day 7: Binary Tree Traversals",
    notes:
      "DFS (inorder, preorder, postorder) and BFS (level order traversal).",
    dueDate: "2025-01-14T23:59:59.000Z",
    startDate: "2025-01-14T00:00:00.000Z",
    subtasks: [
      "Implement DFS (inorder, preorder, postorder)",
      "Implement BFS (level order traversal)",
      "Solve recursively",
      "Solve iteratively using collections.deque",
    ],
  },
  {
    title: "Day 8: Binary Search Trees (BST)",
    notes: "Study BST operations and properties.",
    dueDate: "2025-01-15T23:59:59.000Z",
    startDate: "2025-01-15T00:00:00.000Z",
    subtasks: [
      "Implement insertion, deletion, and search",
      "Solve Lowest Common Ancestor (LCA)",
      "Analyze BST properties and complexities",
    ],
  },
  {
    title: "Day 9: Advanced Trees (Tries, Segment Trees)",
    notes: "Understand and implement Tries and Segment Trees.",
    dueDate: "2025-01-16T23:59:59.000Z",
    startDate: "2025-01-16T00:00:00.000Z",
    subtasks: [
      "Study Tries and their implementation",
      "Study Segment Trees for range queries",
      "Analyze time and space complexities",
    ],
  },
  {
    title: "Day 10: Tree Path Problems and A* Search",
    notes: "Pathfinding in trees and grids.",
    dueDate: "2025-01-17T23:59:59.000Z",
    startDate: "2025-01-17T00:00:00.000Z",
    subtasks: [
      "Study root-to-leaf pathfinding",
      "Study longest path in trees",
      "Implement A* search",
      "Compare A* and Dijkstra's",
    ],
  },
  {
    title: "Day 11: Tree and Graph Mock Practice",
    notes: "Timed practice for graph and tree problems.",
    dueDate: "2025-01-18T23:59:59.000Z",
    startDate: "2025-01-18T00:00:00.000Z",
    subtasks: [
      "Review graph representations and traversals",
      "Solve problems from previous days",
      "Simulate timed practice session",
    ],
  },
  {
    title: "Day 12: Sorting Algorithms and Data Structure Choice",
    notes: "Study sorting algorithms and data structure impact.",
    dueDate: "2025-01-19T23:59:59.000Z",
    startDate: "2025-01-19T00:00:00.000Z",
    subtasks: [
      "Study Merge Sort, Quick Sort, Radix Sort, and Insertion Sort",
      "Solve Merge Intervals problem",
      "Solve Kth Largest Element problem",
    ],
  },
  {
    title: "Day 13: Searching Techniques",
    notes: "Binary Search and its variations.",
    dueDate: "2025-01-20T23:59:59.000Z",
    startDate: "2025-01-20T00:00:00.000Z",
    subtasks: [
      "Study Binary Search",
      "Solve Search in Rotated Array problem",
      "Solve Find Minimum in Rotated Array problem",
    ],
  },
  {
    title: "Day 14: Recursion and Divide & Conquer",
    notes: "Recursive thinking and divide-and-conquer.",
    dueDate: "2025-01-21T23:59:59.000Z",
    startDate: "2025-01-21T00:00:00.000Z",
    subtasks: [
      "Study recursive thinking",
      "Solve Generate Parentheses problem",
      "Solve Permutations problem",
      "Analyze recursive time complexity",
    ],
  },
  {
    title: "Day 15: Big-O Analysis and Recursion Deep Dive",
    notes: "Deep dive into Big-O analysis.",
    dueDate: "2025-01-22T23:59:59.000Z",
    startDate: "2025-01-22T00:00:00.000Z",
    subtasks: [
      "Analyze recursive vs iterative time complexity",
      "Review previously solved problems",
      "Handle recursion depth issues in Python",
    ],
  },
  {
    title: "Day 16: Bit Manipulation Basics",
    notes: "Study XOR operations, bitmasking, and common tricks.",
    dueDate: "2025-01-23T23:59:59.000Z",
    startDate: "2025-01-23T00:00:00.000Z",
    subtasks: [
      "Practice XOR and bitmasking",
      "Solve Single Number problem",
      "Solve Subsets using bitmasking",
      "Solve other bitwise problems",
    ],
  },
  {
    title: "Day 17: Greedy Algorithms and Math/Probability",
    notes: "Activity selection, interval scheduling, and probability basics.",
    dueDate: "2025-01-24T23:59:59.000Z",
    startDate: "2025-01-24T00:00:00.000Z",
    subtasks: [
      "Solve Activity Selection problem",
      "Solve Interval Scheduling problem",
      "Practice probability and combinatorics problems",
    ],
  },
  {
    title: "Day 18: Advanced Graph Algorithms II",
    notes: "Review advanced graph algorithms.",
    dueDate: "2025-01-25T23:59:59.000Z",
    startDate: "2025-01-25T00:00:00.000Z",
    subtasks: [
      "Review BFS, DFS, Dijkstra's, and A*",
      "Solve challenging graph problems",
      "Implement A* on a grid or solve Path with Minimum Effort",
    ],
  },
  {
    title: "Day 19: Full Mock Interview",
    notes: "Simulate a full coding interview.",
    dueDate: "2025-01-26T23:59:59.000Z",
    startDate: "2025-01-26T00:00:00.000Z",
    subtasks: [
      "Solve selected problems under timed conditions",
      "Practice explaining your approach",
      "Review performance and identify weaknesses",
    ],
  },
  {
    title: "Day 20: Review and Final Preparations",
    notes: "Final review of weak areas and light practice.",
    dueDate: "2025-01-27T23:59:59.000Z",
    startDate: "2025-01-27T00:00:00.000Z",
    subtasks: [
      "Review weak areas",
      "Revisit mistakes",
      "Do light practice problems for reinforcement",
    ],
  },
];
function createTasksFlatStructureWithDates(taskListName, tasks) {
  const taskLists = Tasks.Tasklists.list().items;
  let taskListId = null;

  // Check if the task list exists
  if (taskLists) {
    for (const list of taskLists) {
      if (list.title === taskListName) {
        taskListId = list.id;
        break;
      }
    }
  }

  // Create a task list if it doesn't exist
  if (!taskListId) {
    const newTaskList = Tasks.Tasklists.insert({ title: taskListName });
    taskListId = newTaskList.id;
    Logger.log(`New Task List Created: ${taskListId}`);
  }

  // Add tasks and their subtasks
  tasks.forEach((task) => {
    // Add the main (parent) task
    const parentTask = Tasks.Tasks.insert(
      {
        title: task.title,
        notes: task.notes,
        due: task.dueDate,
        startDate: task.startDate,
      },
      taskListId
    );

    // Log the created parent task
    if (parentTask && parentTask.id) {
      Logger.log(`Parent Task Created: ${parentTask.title}, ID: ${parentTask.id}`);
    } else {
      Logger.log(`Failed to create parent task for: ${task.title}`);
      return; // Skip subtasks if parent task creation failed
    }

    // Add subtasks linked to the parent task
    if (task.subtasks && task.subtasks.length > 0) {
      task.subtasks.forEach((subtask) => {
        const subtaskCreated = Tasks.Tasks.insert(
          {
            title: subtask,
            parent: parentTask.id, // Link to the parent task
            due: task.dueDate,
            startDate: task.startDate,
          },
          taskListId
        );

        if (subtaskCreated.parent) {
          Logger.log(
            `Subtask Created: ${subtaskCreated.title}, Parent: ${subtaskCreated.parent}`
          );
        } else {
          Logger.log(`Failed to link subtask: ${subtask} to parent ID: ${parentTask.id}`);
        }
      });
    }
  });

  Logger.log("All tasks and subtasks created successfully!");
}

const taskListName = "Google Interview Preparation Plan";
createTasksFlatStructureWithDates(taskListName, tasks)

