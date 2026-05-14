import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

export default function EventIndex() {
    return(
        <div>
            <h1 className="mb-6">INI HALAMAN EVENT</h1>
            <Link to="/dashboard/event/create">
                <Button label="Create Event New" variant="primary" />
            </Link>
        </div>
    );

};