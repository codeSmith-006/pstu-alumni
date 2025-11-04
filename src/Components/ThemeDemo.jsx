import React from "react";

export default function ThemeDemo() {
  return (
    <div className="max-w-xl mx-auto p-6 rounded-lg shadow-lg text-gray-900 dark:text-gray-100 space-y-5 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-center">
        How to Use the{" "}
        <span className="text-red-600 dark:text-blue-600">
          Theme Toggle ReactJS
        </span>
      </h2>

      <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
        <li>
          First, import the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
            ThemeProvider
          </code>
          and wrap your whole app (or a section) inside it.
          <br />
          <small className="text-sm opacity-80">
            This enables dark/light mode support across your app.
          </small>
        </li>

        <li>
          Use the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
            ThemeToggle
          </code>{" "}
          component wherever you want your toggle button to appear.
        </li>

        <li>
          Want to make it look different? You can pass a{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
            renderButton
          </code>{" "}
          prop to design your own button or icons.
        </li>

        <li>
          The toggle supports three modes:
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>
              <strong>Light</strong> – Always use light mode.
            </li>
            <li>
              <strong>Dark</strong> – Always use dark mode.
            </li>
            <li>
              <strong>Auto</strong> – Follows your system theme.
            </li>
          </ul>
        </li>

        <li>
          The user’s choice is saved automatically in{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
            localStorage
          </code>
          under the key{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
            hs_theme
          </code>
          .
        </li>

        <li>
          You can freely change the toggle button’s design, icons, or colors —
          the logic will still work perfectly.
        </li>

        <li>
          Finally, drop the toggle anywhere in your app so users can easily
          switch between dark and light mode.
        </li>
      </ol>
    </div>
  );
}
