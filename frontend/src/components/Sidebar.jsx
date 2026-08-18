import {
  Brain,
  Code2,
  Database,
  GitBranch,
  Layers,
  Network,
  Plus,
} from "lucide-react";

/* This page contains the DSA sidebar */

function Sidebar({ onNewChat }) {
  return (
    <aside className="sidebar">
      {/* Logo */}

      <div className="logo">
        <div className="logo-icon">
          <Brain size={21} />
        </div>

        <div>
          DSA<span>.AI</span>
        </div>
      </div>

      {/* New chat */}

      <button className="new-chat" onClick={onNewChat}>
        <Plus size={18} />
        New Chat
      </button>

      {/* Topics */}

      <div className="section-title">DSA TOPICS</div>

      <div className="topics">
        <button>
          <Code2 size={17} />
          Arrays
        </button>

        <button>
          <Layers size={17} />
          Stack & Queue
        </button>

        <button>
          <GitBranch size={17} />
          Trees
        </button>

        <button>
          <Network size={17} />
          Graphs
        </button>

        <button>
          <Database size={17} />
          Dynamic Programming
        </button>
      </div>

      {/* Online status */}

      <div className="sidebar-bottom">
        <div className="online-dot"></div>
        AI Online
      </div>
    </aside>
  );
}

export default Sidebar;
