// Класс конфигурационного сервиса должен быть реализован в пространстве имен Terrasoft.Configuration.
// При необходимости можно создавать для веб-сервиса свое рабочее пространство, но оно должно быть 
// обязательно вложенным в Terrasoft.Configuration.
namespace Terrasoft.Configuration.CustomConfigurationService
{
    using System;
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;

    // Класс сервиса помечен обязательными атрибутами [ServiceContract] и 
    // [AspNetCompatibilityRequirements] с параметрами.
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class CustomConfigurationService
    {
        // Метод сервиса помечен обязательными атрибутами [OperationContract] и 
        // [WebInvoke] с параметрами.
        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,
        ResponseFormat = WebMessageFormat.Json)]
        public string GetTransformValue(string inputParam)
        {
            var result = inputParam  + "calls the service!!!";
            return result;
        }
    }
}