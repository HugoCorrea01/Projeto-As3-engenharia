import * as S from "./style";

const Cartao = (props) => (
  <>
      <S.ContainerItens>
      <S.Descricao>{props.name}</S.Descricao>
      <S.Descricao>{props.email}</S.Descricao>
      <S.Descricao>{props.numb}</S.Descricao>
      <S.Descricao>{props.depart}</S.Descricao>
      <S.Descricao>{props.estado}</S.Descricao>
      <S.Descricao>{props.prior}</S.Descricao>
      <S.Descricao>{props.atrib}</S.Descricao>
      <S.Descricao>{props.criado}</S.Descricao>
      </S.ContainerItens>
  </>
);

export default Cartao;
