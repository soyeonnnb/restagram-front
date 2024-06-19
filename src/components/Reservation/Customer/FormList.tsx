import { Dispatch, SetStateAction } from "react";
import { ReservationFormInterface } from "../../../interfaces/ReservationInterfaces";
import * as S from "./FormList.styles";
import FormRow from "./FormRow";

interface FormListProps {
  list: ReservationFormInterface[];
  selectedForm: number | null;
  setSelectedForm: Dispatch<SetStateAction<number | null>>;
  person: number;
  tablePerson: number;
}

function FormList({
  list,
  selectedForm,
  setSelectedForm,
  person,
  tablePerson,
}: FormListProps) {
  return (
    <S.Layout>
      {list.map((form, idx) => (
        <FormRow
          form={form}
          key={idx}
          selectedForm={selectedForm}
          setSelectedForm={setSelectedForm}
          person={person}
          tablePerson={tablePerson}
        />
      ))}
    </S.Layout>
  );
}

export default FormList;
