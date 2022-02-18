import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddParent from "./routes/AddParent";
import Parents from "./routes/Parents";
import Students from "./routes/Students";
import WaitingRoom from "./routes/WaitingRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/parents" element={<Parents />} />

        <Route path="/students" element={<Students />} />
        <Route path="/addParent" element={<AddParent />} />
        <Route path="/waitingRoom" element={<WaitingRoom />} />

        <Route
          path="*"
          element={
            <main className="flex h-screen w-screen items-center justify-center gap-4 bg-slate-700 p-4">
              <span className="text-8xl font-bold uppercase text-white">
                404
              </span>{" "}
              <p className="text-2xl uppercase text-white">
                There's nothing here!
              </p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
// const Main = () => {
//   return (
//     <div>
//       <h1 className="text-xl capitalize text-white first-letter:text-3xl">
//         Bookkeeper
//       </h1>
//       <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem",
//         }}
//       >
//         <Link to="/Parents">Invoices</Link>
//         <Link to="/Students">Expenses</Link>
//       </nav>
//     </div>
//   );
// };

export default App;
