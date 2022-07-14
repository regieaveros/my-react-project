import * as api from "../../api/index";
import { useQuery } from "react-query";

const useNotes = () => {
  return useQuery(["note"], api.getNote);
};

export default useNotes;
