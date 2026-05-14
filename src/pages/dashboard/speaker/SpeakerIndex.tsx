import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/Button";

export default function SpeakerIndex() {
    return(
        <div>
            <h1 className="mb-6">INI HALAMAN SPEAKER</h1>
            <Link to="/dashboard/speaker/create">
                <Button label="Create Speaker New" variant="primary" />
            </Link>
        </div>
    );
};