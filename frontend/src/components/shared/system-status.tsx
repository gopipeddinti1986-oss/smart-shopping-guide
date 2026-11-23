"use client";

import React, { useEffect, useState } from "react";
import { fetchHealth } from "@/lib/api/client";
import { BackendHealthResponse } from "@/types";
import { Activity, CheckCircle, AlertCircle, RefreshCw } from "lucide-react";

export function SystemStatus() {
  const [status, setStatus] = useState<"loading" | "connected" | "error">("loading");
  const [healthData, setHealthData] = useState<BackendHealthResponse | null>(null);
  const [minimized, setMinimized] = useState(false);

  const checkStatus = async () => {
    setStatus("loading");
    const result = await fetchHealth();
    if (result.data && result.data.status === "healthy") {
      setHealthData(result.data);
      setStatus("connected");
    } else {
      setHealthData(null);
      setStatus("error");
    }
  };

  useEffect(() => {
    let isCancelled = false;
    async function loadInitialStatus() {
      const result = await fetchHealth();
      if (!isCancelled) {
        if (result.data && result.data.status === "healthy") {
          setHealthData(result.data);
          setStatus("connected");
        } else {
          setHealthData(null);
          setStatus("error");
        }
      }
    }
    loadInitialStatus();
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <aside
      aria-label="Development System Health Status"
      className="fixed bottom-4 right-4 z-50 transition-all duration-200"
    >
      {minimized ? (
        <button
          type="button"
          onClick={() => setMinimized(false)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:text-emerald-600 focus:outline-hidden"
          title="Open API Status Monitor"
        >
          <Activity className="h-4 w-4" />
        </button>
      ) : (
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-xs text-xs text-slate-700">
          <div className="flex items-center gap-2">
            {status === "loading" && (
              <RefreshCw className="h-3.5 w-3.5 animate-spin text-emerald-600" />
            )}
            {status === "connected" && (
              <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
            )}
            {status === "error" && (
              <AlertCircle className="h-3.5 w-3.5 text-amber-500" />
            )}

            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 leading-tight">
                {status === "loading" && "Checking API..."}
                {status === "connected" && (healthData?.application || "Backend Online")}
                {status === "error" && "Backend Offline (Local mode)"}
              </span>
              <span className="text-[10px] text-slate-500 leading-tight">
                {status === "connected" ? `v${healthData?.version} • Healthy` : "Port 8000"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 border-l border-slate-200 pl-2">
            <button
              type="button"
              onClick={checkStatus}
              className="rounded p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title="Refresh status"
            >
              <RefreshCw className="h-3 w-3" />
            </button>
            <button
              type="button"
              onClick={() => setMinimized(true)}
              className="rounded p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors text-[10px]"
              title="Minimize status badge"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
