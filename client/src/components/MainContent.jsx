/* eslint-disable react/prop-types */
import "../assets/styles/MainContent.css"
export default function MainContent({ children }) {
  return (
    <main className="main-content">
      {children}
    </main>
  );
}
