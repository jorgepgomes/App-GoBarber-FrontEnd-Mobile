import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useMemo } from "react";
import Icon from "react-native-vector-icons/Feather";
import { format } from "date-fns";
// import { ptBr } from "date-fns/pt-BR";

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from "./styles";

interface RouteParams {
  date: number;
}

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const routeParams = params as RouteParams;

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [
        {
          name: "Dashboard",
        },
      ],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    return;
  }, []);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Agendamento concluído</Title>
      <Description>descricao</Description>
      <OkButton onPress={handleOkPressed}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
