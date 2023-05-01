import React, { useEffect, useState } from "react";
import { Container, Text } from "@chakra-ui/react";
import { IoIosAdd } from "react-icons/io";
import Session from "./Session";
import { BsTrash } from "react-icons/bs";

const Siderbar = ({
  sessions,
  isLoading,
  selectedId,
  fetchSessions,
  setSelectedId,
}) => {
  const handleIdChange = (id) => {
    setSelectedId(id);
  };

  if (isLoading) {
    return <div className="loading">Sidebar...</div>;
  }

  const style = { color: "white", fontSize: "24px" };
  return (
    <Container
      maxW={"20%"}
      display={"flex"}
      flexDirection={"column"}
      bgColor={"rgb(32,33,35)"}
      minH={"100vh"}
      left={0}
      top={0}
      m={0}
      px={1}
    >
      <Container
        top={0}
        border={"1px solid #d9d9e3"}
        borderRadius={"md"}
        my={8}
        py={3}
        cursor={"pointer"}
        display={"flex"}
        flexWrap={"wrap"}
        flexDirection={"row"}
        _hover={{ opacity: "0.75", brightness: "1.3" }}
        onClick={() => handleIdChange(null)}
      >
        <IoIosAdd style={style} />
        <Text color={"white"} ml={2}>
          New Chat
        </Text>
      </Container>
      <Container
        display={"flex"}
        flexDirection={"column"}
        p={0}
        overflowY={"scroll"}
        sx={{
          "::-webkit-scrollbar": {
            width: "5px",
          },
          "::-webkit-scrollbar-track": {
            background: "rgb(68,70,84)",
          },
          "::-webkit-scrollbar-thumb": {
            background: "rgba(217,217,227,.8)",
          },
        }}
      >
        {sessions.map((item) => {
          return (
            <Session
              selectedId={selectedId}
              id={item.id}
              setSelectedId={handleIdChange}
              fetchSessions = {fetchSessions}
            />
          );
        })}
      </Container>
    </Container>
  );
};

export default Siderbar;
