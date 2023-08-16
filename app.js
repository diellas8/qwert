import "./App.css";
import { CreateModal, Header, ServiceModal, Table } from "./components";
import { useState } from "react";
import { UploadOutlined } from '@ant-design/icons';

function App() {
  const [notes, setNotes] = useState([]);

  const [selectedStatus, setSelectedStatus] = useState();
  const [openCreate, setOpenCreate] = useState(false);

  const [openService, setOpenService] = useState(false);

  const [selectedRow, setSelectedRow] = useState();

  const handleCreate = (note) => {
    setNotes((previous) => [...previous, note]);
    setOpenCreate(false);
  };

  const handleCancel = () => {
    setOpenCreate(false);
  };

  const handleSelectRow = (row) => {
    setSelectedRow(row);
    setOpenService(true);
  };


  return (
    <div className="App">
      <Header
        onSelect={(value) =>
          setSelectedStatus(value === selectedStatus ? null : value)
        }
      />
      <Table
        rows={notes.filter(
          (note) => !selectedStatus || note.status === selectedStatus
        )}
        onCreate={() => setOpenCreate(true)}
        onClickTitle={handleSelectRow}
      />
      <CreateModal
        open={openCreate}
        onCreate={handleCreate}
        onCancel={handleCancel}
      />
      <ServiceModal
        row={selectedRow}
        open={openService}
        onClose={() => setOpenService(false)}
      />
    </div>
  );
}

export default App;
