using Chatty.Api.Hubs.Clients;
using Microsoft.AspNetCore.SignalR;

namespace Chatty.Api.Hubs
{
    public class ChatHub : Hub<IChatClient>
    { }
}