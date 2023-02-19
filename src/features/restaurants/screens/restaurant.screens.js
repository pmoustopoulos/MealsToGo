import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styled from "styled-components/native";

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const StyledSearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeAreaProvider>
      <StyledSafeAreaView>
        <StyledSearchView>
          <Searchbar placeholder="Search" />
        </StyledSearchView>
        <RestaurantInfoCard />
      </StyledSafeAreaView>
    </SafeAreaProvider>
  );
};
