import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styled from "styled-components/native";

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const StyledSearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const StyledListView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeAreaProvider>
      <StyledSafeAreaView>
        <StyledSearchView>
          <Searchbar placeholder="Search" />
        </StyledSearchView>
        <StyledListView>
          <RestaurantInfoCard />
        </StyledListView>
      </StyledSafeAreaView>
    </SafeAreaProvider>
  );
};
