import { useParams } from "react-router-dom";
//components
import Header from "../components/detail/Header";
// import Header from "../components/Common/Header";

import styled from "styled-components";
import ItemInfo from "../components/detail/ItemInfo";

const DetailPage = ({}) => {
  const { postId } = useParams();
  // console.log(postId);
  return (
    <Wrapper>
      <Header />
      <ItemInfo postId={postId} />
    </Wrapper>
  );
};
export default DetailPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
