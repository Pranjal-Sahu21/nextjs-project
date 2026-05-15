"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  title: string;
  description: string;
  overview: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: "online" | "offline" | "hybrid";
  audience: string;
  organizer: string;
  image: File | null;
  tags: string[];
  agenda: string[];
}

const CreateEventForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    overview: "",
    venue: "",
    location: "",
    date: "",
    time: "",
    mode: "hybrid",
    audience: "",
    organizer: "",
    image: null,
    tags: [],
    agenda: [],
  });

  const [tagInput, setTagInput] = useState("");
  const [agendaInput, setAgendaInput] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const addTag = () => {
    if (tagInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput("");
    }
  };

  const removeTag = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }));
  };

  const addAgendaItem = () => {
    if (agendaInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        agenda: [...prev.agenda, agendaInput.trim()],
      }));
      setAgendaInput("");
    }
  };

  const removeAgendaItem = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      agenda: prev.agenda.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!formData.title || !formData.description || !formData.overview) {
      setError("Title, description, and overview are required");
      setLoading(false);
      return;
    }
    if (!formData.image) {
      setError("Event image is required");
      setLoading(false);
      return;
    }
    if (formData.tags.length === 0) {
      setError("Add at least one tag");
      setLoading(false);
      return;
    }
    if (formData.agenda.length === 0) {
      setError("Add at least one agenda item");
      setLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("overview", formData.overview);
      formDataToSend.append("venue", formData.venue);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("date", formData.date);
      formDataToSend.append("time", formData.time);
      formDataToSend.append("mode", formData.mode);
      formDataToSend.append("audience", formData.audience);
      formDataToSend.append("organizer", formData.organizer);
      formDataToSend.append("image", formData.image);
      formDataToSend.append("tags", JSON.stringify(formData.tags));
      formDataToSend.append("agenda", JSON.stringify(formData.agenda));

      const response = await fetch("/api/events", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create event");
      }

      setSuccess("Event created successfully! Redirecting...");
      setTimeout(() => router.push("/events"), 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="book-event">
      <form onSubmit={handleSubmit}>
        {/* Alerts */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm font-inter">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-primary text-sm font-inter">
            {success}
          </div>
        )}

        {/* ── Event Details ── */}
        <div className="flex flex-col gap-5">
          <h2>Event Details</h2>

          <div>
            <label htmlFor="title">Event Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., React Meetup 2024"
              maxLength={100}
            />
            <p className="text-xs text-light-200 mt-1">
              {formData.title.length}/100 characters
            </p>
          </div>

          <div>
            <label htmlFor="overview">Overview *</label>
            <textarea
              id="overview"
              name="overview"
              value={formData.overview}
              onChange={handleInputChange}
              placeholder="Brief description of your event (max 500 characters)"
              rows={3}
              maxLength={500}
              className="bg-dark-200 rounded-lg px-4 py-3 font-inter text-sm placeholder:text-light-200/50 border border-transparent transition-all duration-200 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 resize-none w-full text-foreground"
            />
            <p className="text-xs text-light-200 mt-1">
              {formData.overview.length}/500 characters
            </p>
          </div>

          <div>
            <label htmlFor="description">Full Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Detailed description of your event (max 1000 characters)"
              rows={5}
              maxLength={1000}
              className="bg-dark-200 rounded-lg px-4 py-3 font-inter text-sm placeholder:text-light-200/50 border border-transparent transition-all duration-200 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 resize-none w-full text-foreground"
            />
            <p className="text-xs text-light-200 mt-1">
              {formData.description.length}/1000 characters
            </p>
          </div>
        </div>

        {/* ── Event Image ── */}
        <div className="flex flex-col gap-3">
          <h2>Event Image</h2>
          <div>
            <label htmlFor="image">Event Image *</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="bg-dark-200 rounded-lg px-4 py-3 font-inter text-sm border border-transparent transition-all duration-200 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 w-full text-foreground file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-medium file:bg-primary/10 file:text-primary cursor-pointer"
            />
            {formData.image && (
              <p className="text-xs text-primary mt-1.5">
                ✓ {formData.image.name}
              </p>
            )}
          </div>
        </div>

        {/* ── Location & Schedule ── */}
        <div className="flex flex-col gap-5">
          <h2>Location &amp; Schedule</h2>

          <div>
            <label htmlFor="mode">Event Mode *</label>
            <select
              id="mode"
              name="mode"
              value={formData.mode}
              onChange={handleInputChange}
              className="bg-dark-200 rounded-lg px-4 py-3 font-inter text-sm border border-transparent transition-all duration-200 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 w-full text-foreground appearance-none cursor-pointer"
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <div>
              <label htmlFor="venue">Venue *</label>
              <input
                type="text"
                id="venue"
                name="venue"
                value={formData.venue}
                onChange={handleInputChange}
                placeholder="e.g., Tech Hub"
              />
            </div>
            <div>
              <label htmlFor="location">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., San Francisco, CA"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <div>
              <label htmlFor="date">Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="time">Time *</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* ── Additional Information ── */}
        <div className="flex flex-col gap-5">
          <h2>Additional Information</h2>

          <div>
            <label htmlFor="audience">Target Audience *</label>
            <input
              type="text"
              id="audience"
              name="audience"
              value={formData.audience}
              onChange={handleInputChange}
              placeholder="e.g., Beginner to Intermediate developers"
            />
          </div>

          <div>
            <label htmlFor="organizer">Organizer *</label>
            <input
              type="text"
              id="organizer"
              name="organizer"
              value={formData.organizer}
              onChange={handleInputChange}
              placeholder="Your organization name"
            />
          </div>
        </div>

        {/* ── Tags ── */}
        <div className="flex flex-col gap-3">
          <h2>Tags *</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && (e.preventDefault(), addTag())
              }
              placeholder="Add a tag (e.g., React, JavaScript)"
              className="flex-1 bg-dark-200 rounded-lg px-4 py-3 font-inter text-sm placeholder:text-light-200/50 border border-transparent transition-all duration-200 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 text-foreground"
            />
            <button
              type="button"
              onClick={addTag}
              className="w-full! sm:w-auto! px-5 py-3 text-sm"
            >
              Add Tag
            </button>
          </div>
          {formData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag, index) => (
                <span key={index} className="pill flex items-center gap-2">
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="w-auto! bg-transparent! p-0! text-light-200! hover:text-red-400! text-xs leading-none"
                    aria-label={`Remove tag ${tag}`}
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ── Agenda ── */}
        <div className="flex flex-col gap-3">
          <h2>Agenda *</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={agendaInput}
              onChange={(e) => setAgendaInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && (e.preventDefault(), addAgendaItem())
              }
              placeholder="Add an agenda item"
              className="flex-1 bg-dark-200 rounded-lg px-4 py-3 font-inter text-sm placeholder:text-light-200/50 border border-transparent transition-all duration-200 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 text-foreground"
            />
            <button
              type="button"
              onClick={addAgendaItem}
              className="w-full! sm:w-auto! px-5 py-3 text-sm"
            >
              Add Item
            </button>
          </div>
          {formData.agenda.length > 0 && (
            <ol className="flex flex-col gap-2 list-decimal list-inside">
              {formData.agenda.map((item, index) => (
                <li
                  key={index}
                  className="text-light-100 text-sm font-inter flex items-center justify-between gap-4"
                >
                  <span>{item}</span>
                  <button
                    type="button"
                    onClick={() => removeAgendaItem(index)}
                    className="w-auto! bg-transparent! p-0! text-light-200! hover:text-red-400! text-xs shrink-0"
                    aria-label={`Remove agenda item ${index + 1}`}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ol>
          )}
        </div>

        {/* ── Submit ── */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={loading}
            className="button-submit disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Event..." : "Create Event"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/events")}
            className="bg-dark-200! text-light-100! hover:bg-dark-200/80! hover:shadow-none!"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;
