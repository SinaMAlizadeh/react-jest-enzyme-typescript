import AsyncAwait, { Follower } from "../AsyncAwait";
import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import { render, screen, act } from "@testing-library/react";

const successResult = {
  results: [
    {
      name: {
        first: "sina",
        last: "sina",
        title: "sina",
      },
      picture: {
        large: "sina",
        medium: "sina",
        thumbnail: "sina",
      },
    },
  ],
};

const mockFetchUserData = (data) => {
  return (global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => data,
    })
  ));
};

describe("Counter testig", () => {
  test("renders learn react link", async () => {
    await mockFetchUserData(successResult);
    await act(async () => await render(<AsyncAwait />));
    const FollowerDivElement = await screen.findAllByTestId(/list-item/i);
    expect(FollowerDivElement.length).toBe(1);
  });
});
