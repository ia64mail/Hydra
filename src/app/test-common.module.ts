import {Mock} from "typemoq";

export module TestCommon {
  /**
   * TODO Introduce via generics - export function getMockInstance<T extends Function>(classToMock: T) : TypeMoq.IMock<T> {
   * See https://github.com/florinn/typemoq/issues/16
   * @param classToMock
   * @returns {module:typemoq/Api/IMock.IMock<any>}
   */
  export function getMockInstance(classToMock: any) {
    // Save current class prototype
    let oldPrototype = classToMock.prototype;
    // Create empty type and copy the saved prototype
    let newClass = function () {
      return;
    };
    newClass.prototype = oldPrototype;
    // Create a mock of the new class (empty constructor with same functions as classToMock)
    let newInstance = new newClass();
    return Mock.ofInstance(newInstance);
  }
}
