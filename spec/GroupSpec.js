describe("Create groups", function() {
  it("rejects empty input", function() {
    expect(str2array(" ")).toBe(null);
  });

  it("treats mulitiple consecutive delimiters as one", function() {
    expect(str2array("a,,;b;c;\n")).toEqual(["a", "b", "c"]);
  });
});
