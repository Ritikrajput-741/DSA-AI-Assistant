import {
  Brain,
  Plus,
  Code2,
  GitBranch,
  Layers,
  Network,
  Database,
} from "lucide-react";

function Sidebar({ onNewChat }) {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <Brain size={21} />
        </div>

        <div>
          DSA<span>.AI</span>
        </div>
      </div>

      <button className="new-chat" onClick={onNewChat}>
        <Plus size={18} />
        New Chat
      </button>

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

      <div className="sidebar-bottom">
        <div className="online-dot"></div>
        AI Online
      </div>
    </aside>
  );
}

export default Sidebar;
