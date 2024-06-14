import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ReservationFormInterface } from "../../../interfaces/ReservationInterfaces";
import * as S from "./FormRow.styles";
import Text from "../../Common/Text";

interface FormRow {
  form: ReservationFormInterface;
  selectedForm: number | null;
  setSelectedForm: Dispatch<SetStateAction<number | null>>;
  person: number;
  tablePerson: number;
}

function FormRow({
  form,
  selectedForm,
  setSelectedForm,
  person,
  tablePerson,
}: FormRow) {
  const time: string[] = form.time.split(":");
  const [selected, setSelected] = useState<boolean>(false);
  const [available, setAvailable] = useState<boolean>(false);

  const getTableNum = (): number => {
    let table = Math.floor(person / tablePerson);
    if (person % tablePerson !== 0) table += 1;
    return table;
  };

  useEffect(() => {
    const tableNum = getTableNum();
    setAvailable(form.remainQuantity !== 0 && form.remainQuantity >= tableNum);
  }, [person]);

  useEffect(() => {
    if (!selectedForm) {
      setSelected(false);
      return;
    }
    setSelected(selectedForm === form.id);
  }, [selectedForm]);

  const handleSelectedForm = () => {
    if (!available) return;
    setSelectedForm(form.id);
  };

  return (
    <S.Layout
      selected={selected}
      onClick={() => handleSelectedForm()}
      available={available}
    >
      <Text text={`${time[0]}`} pointer />
      <Text text=":" marginl={3} marginr={3} pointer />
      <Text text={`${time[1]}`} pointer />
    </S.Layout>
  );
}
export default FormRow;
