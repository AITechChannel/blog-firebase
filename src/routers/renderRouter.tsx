import { Route } from "react-router-dom";

const renderRouter = (routers: any) => {
  if (!routers) {
    return;
  }
  const routesList = routers.map((_item: any, _idx: number) => {
    if (!_item.children) {
      return <Route path={_item.path} element={_item.element} />;
    }

    return (
      <Route path={_item.path} element={_item.element}>
        {renderRouter(_item?.children)}
      </Route>
    );
  });

  return routesList;
};

export default renderRouter;
