import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createUserControl, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("usercontrol");
      if (queryClient.getQueryData("usercontrol")) {
        queryClient.setQueryData("usercontrol", (old) => [...old, newData]);
      }
      return () => queryClient.setQueryData("usercontrol", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("usercontrol");
    },
  });
};

export default useCreate;
