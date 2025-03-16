"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingEngine = void 0;
var RoutingEngine = (function () {
    function RoutingEngine(routing) {
        if (routing === void 0) { routing = new Array(); }
        this.routing = routing;
    }
    RoutingEngine.prototype.Add = function (routing, route) {
        var routed = new routing();
        routed.AddRoute(route);
        this.routing.push(routed);
    };
    return RoutingEngine;
}());
exports.RoutingEngine = RoutingEngine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGluZ0VuZ2luZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJvdXRpbmdFbmdpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0E7SUFDRSx1QkFBb0IsT0FBeUM7UUFBekMsd0JBQUEsRUFBQSxjQUF5QixLQUFLLEVBQVc7UUFBekMsWUFBTyxHQUFQLE9BQU8sQ0FBa0M7SUFDN0QsQ0FBQztJQUNNLDJCQUFHLEdBQVYsVUFBK0IsT0FBdUIsRUFBRSxLQUFVO1FBQ2hFLElBQU0sTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLHNDQUFhIn0=