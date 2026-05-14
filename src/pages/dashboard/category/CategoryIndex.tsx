import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

export default function CategoryIndex() {
    return(
        <div>
            <h1 className="mb-6">INI HALAMAN CATEGORY</h1>
            <Link to="/dashboard/category/create">
                <Button label="Create Category New" variant="primary" />
            </Link>

        </div>
    );
};