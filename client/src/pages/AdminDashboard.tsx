import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { trpc } from "@/lib/trpc";
import DashboardLayout from "@/components/DashboardLayout";
import { CheckCircle2, XCircle, Loader2, AlertCircle, Mail, User, Calendar } from "lucide-react";
import { toast } from "sonner";

export default function AdminDashboard() {
  const [newWhitelistEmail, setNewWhitelistEmail] = useState("");

  const { data: currentUser } = trpc.auth.me.useQuery();
  const { data: pendingRequests, refetch: refetchRequests } = trpc.admin.getPendingRequests.useQuery();
  const { data: allUsers, refetch: refetchUsers } = trpc.admin.getAllUsers.useQuery();
  const { data: whitelist, refetch: refetchWhitelist } = trpc.admin.getWhitelist.useQuery();

  const approveRequestMutation = trpc.admin.approveAccessRequest.useMutation({
    onSuccess: () => {
      toast.success("Access request approved");
      refetchRequests();
      refetchWhitelist();
    },
    onError: (err) => toast.error(err.message),
  });

  const rejectRequestMutation = trpc.admin.rejectAccessRequest.useMutation({
    onSuccess: () => {
      toast.success("Access request rejected");
      refetchRequests();
    },
    onError: (err) => toast.error(err.message),
  });

  const approveUserMutation = trpc.admin.approveUser.useMutation({
    onSuccess: () => {
      toast.success("User approved");
      refetchUsers();
    },
    onError: (err) => toast.error(err.message),
  });

  const rejectUserMutation = trpc.admin.rejectUser.useMutation({
    onSuccess: () => {
      toast.success("User rejected");
      refetchUsers();
    },
    onError: (err) => toast.error(err.message),
  });

  const addToWhitelistMutation = trpc.admin.addToWhitelist.useMutation({
    onSuccess: () => {
      toast.success("Email added to whitelist");
      setNewWhitelistEmail("");
      refetchWhitelist();
    },
    onError: (err) => toast.error(err.message),
  });

  if (currentUser?.role !== "admin") {
    return (
      <DashboardLayout>
        <div className="p-6">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>Admin access required</AlertDescription>
          </Alert>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage user access and approvals</p>
        </div>

        {/* Pending Access Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Access Requests</CardTitle>
            <CardDescription>Review and approve access requests from new users</CardDescription>
          </CardHeader>
          <CardContent>
            {!pendingRequests ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : pendingRequests.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">No pending requests</p>
            ) : (
              <div className="space-y-4">
                {pendingRequests.map((request) => (
                  <div key={request.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <p className="font-medium">{request.name}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">{request.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <p className="text-xs text-muted-foreground">
                            {new Date(request.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="default"
                          onClick={() => approveRequestMutation.mutate({ requestId: request.id })}
                          disabled={approveRequestMutation.isPending}
                        >
                          <CheckCircle2 className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => rejectRequestMutation.mutate({ requestId: request.id })}
                          disabled={rejectRequestMutation.isPending}
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                    {request.reason && (
                      <div className="pt-2 border-t">
                        <p className="text-sm text-muted-foreground">
                          <strong>Reason:</strong> {request.reason}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* All Users */}
        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
            <CardDescription>Manage existing users and their approval status</CardDescription>
          </CardHeader>
          <CardContent>
            {!allUsers ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <div className="space-y-2">
                {allUsers.map((user) => (
                  <div key={user.id} className="border rounded-lg p-3 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{user.name || "No name"}</p>
                        <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                          {user.role}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          user.approvalStatus === "approved"
                            ? "default"
                            : user.approvalStatus === "rejected"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {user.approvalStatus}
                      </Badge>
                      {user.approvalStatus === "pending" && (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => approveUserMutation.mutate({ userId: user.id })}
                            disabled={approveUserMutation.isPending}
                          >
                            <CheckCircle2 className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => rejectUserMutation.mutate({ userId: user.id })}
                            disabled={rejectUserMutation.isPending}
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Whitelist Management */}
        <Card>
          <CardHeader>
            <CardTitle>Whitelist Management</CardTitle>
            <CardDescription>Pre-approved emails that bypass approval process</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <div className="flex-1">
                <Label htmlFor="newEmail">Add Email to Whitelist</Label>
                <Input
                  id="newEmail"
                  type="email"
                  placeholder="investor@example.com"
                  value={newWhitelistEmail}
                  onChange={(e) => setNewWhitelistEmail(e.target.value)}
                />
              </div>
              <Button
                className="mt-auto"
                onClick={() => addToWhitelistMutation.mutate({ email: newWhitelistEmail })}
                disabled={!newWhitelistEmail || addToWhitelistMutation.isPending}
              >
                Add
              </Button>
            </div>

            {whitelist && whitelist.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium">Whitelisted Emails ({whitelist.length})</p>
                <div className="grid gap-2">
                  {whitelist.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border rounded p-2">
                      <p className="text-sm">{item.email}</p>
                      <p className="text-xs text-muted-foreground">
                        Added {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
